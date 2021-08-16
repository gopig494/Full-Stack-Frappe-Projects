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
                    d.type1, d.name1, 'product_price')
                print("________________________________________")
                # print(total)
                # print(self.paid_amount)
                if flt(self.paid_amount) > flt(total):
                    frappe.throw(
                        "Amount is greater than allocated total amount!")
                else:
                    d.total_amount = total
                    remain = flt(d.total_amount)-flt(self.paid_amount)
                    d.outstanding = remain
                    d.allocated = self.paid_amount
        status(self)
    # def on_submit(self):
    #     status(self)


@ frappe.whitelist()
def status(self):
    doc = frappe.get_last_doc('Wallet Transaction')
    print("**************************************************************************************************************************")
    if doc.paid_amount == 0:
        print(doc.paid_amount)
        self.payment_status = 'Unpaid'
    if doc.paid_amount == doc.product_price:
        print(doc.paid_amount)
        self.payment_status = 'Paid'
    if doc.paid_amount != 0 and doc.paid_amount < doc.product_price:
        print(doc.paid_amount)
        self.payment_status = 'Partially Paid'
