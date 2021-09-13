# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import flt, comma_or, nowdate, getdate


class PaymentDetail(Document):
    def validate(self):
        if self.paid_amount:
            for d in self.get("payment_references"):
                total = frappe.db.get_value(
                    d.type1, d.name1, 'outstanding_amount')
               # print("________________________________________")
                # print(total)
                # print(self.paid_amount)
                if flt(self.paid_amount) > flt(total):
                    frappe.throw(
                        "Amount is greater than allocated total amount!")
                else:
                   # d.total_amount = total
                    remain = flt(d.total_amount)-flt(self.paid_amount)
                    d.outstanding = remain
                    print(
                        '************************/////////////////////////////////123')
                    print(remain)
                    d.allocated = self.paid_amount
                    # stor = frappe.get_last_doc("Wallet Transaction")
                    # ap = stor.name
                    # frappe.db.set_value(
                    #     "Wallet Transaction", ap, "outstanding_amount", remain)
                # frappe.db.set_value(
                #     "Wallet Transaction", d.name1, "outstanding_amount", remain)

                if self.paid_amount == 0:
                    self.payment_status = 'Unpaid'
                if self.paid_amount == d.total_amount:
                    self.payment_status = 'Paid'
                if self.paid_amount != 0 and self.paid_amount < d.total_amount:
                    self.payment_status = 'Partially Paid'

    def on_submit(self):
        if self.paid_amount:
            for d in self.get("payment_references"):
                remain = flt(d.total_amount)-flt(self.paid_amount)
                frappe.db.set_value(
                    "Wallet Transaction", d.name1, "outstanding_amount", remain)
