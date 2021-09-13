# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import flt

class PaymentModuleInfo(Document):
    def validate(self):
        if self.paid_amount or flt(self.paid_amount) == 0:
            for i in self.get("payment_references"):
                i.total_amount = flt(frappe.db.get_value(i.type, i.ref_name, 'outstanding_amt'))
                if flt(i.total_amount) >= flt(self.paid_amount):
                    # rec = frappe.get_last_doc("Orders Menu Info")
                    i.allocated_amt = flt(self.paid_amount)
                    i.outstanding_amt = flt(i.total_amount) - flt(i.allocated_amt)
                    # idd = rec.name
                    # frappe.db.set_value("Orders Menu Info",i.ref_name,"outstanding_amt",i.outstanding_amt)
                    if flt(self.paid_amount) == 0:
                        self.payment_status = 'Unpaid'
                    if flt(self.paid_amount) == flt(i.total_amount):
                        self.payment_status = 'Paid'
                    if flt(self.paid_amount) != 0 and flt(i.outstanding_amt)!= 0:
                        self.payment_status = 'Partially Paid'
                else:
                    frappe.throw("Amount is greater than allocated total amount!")
        else:
            frappe.throw(frappe._("Please Give Paid Amount"))



    def on_submit(self):
        for i in self.get("payment_references"):
                i.total_amount = flt(frappe.db.get_value(i.type, i.ref_name, 'outstanding_amt'))
                i.outstanding_amt = flt(i.total_amount) - flt(i.allocated_amt)
                frappe.db.set_value("Orders Menu Info",i.ref_name,"outstanding_amt",i.outstanding_amt)
