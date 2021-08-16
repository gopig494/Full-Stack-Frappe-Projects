# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
#from apps.employee_management.employee_management.employee_management.doctype.payment_detail.payment_detail import PaymentDetail
import frappe
from frappe.model.document import Document


class WalletTransaction(Document):
    pass
#     def on_submit(self):
#         add_child(self)

#     def on_cancel(self):
#         payments = frappe.db.sql(
#             '''select DISTINCT p.name from `tabPayment Detail` p, `tabReference` r where r.parent=p.name and r.type1="Wallet Transaction" and r.name1=%s''', self.name, as_dict=1)

#         for i in payments:

#             print(i.name)
#             docc = frappe.get_doc(
#                 {"doctype": "Payment Detail", "name": i.name})

#             docc.docstatus = 2
#             docc.save(ignore_permissions=True)


# @ frappe.whitelist()
# def add_child(self):
#     if self.customer_name:
#         cus_name = self.customer_name
#     else:
#         cus_name = 'Empty'
#     if self.product_id:
#         pro_id = self.product_id
#     else:
#         pro_id = 'Empty'

#     doc = frappe.get_doc({
#         "doctype": "Payment Detail",
#         "payment_type": 'Pay',
#         "mode_of_payment": 'Cash',
#         "posting_date": self.date,
#         "party_name": cus_name,
#         "party": pro_id,
#         "paid_amount": self.paid_amount,
#     })

#     doc.append("payment_references", {
#                "type1": "Wallet Transaction", "name1": self.name})
#     doc.submit()


@frappe.whitelist(allow_guest=True)
def make_payment(self):

    pe = frappe.get_doc("Wallet Transaction", self)
    stor = frappe.new_doc("Payment Detail")
    stor.payment_type = 'Pay'
    stor.mode_of_payment = 'Debit Card'
    stor.posting_date = pe.date
    stor.party_name = pe.customer_name
    stor.party = pe.product_id
    stor.paid_amount = pe.paid_amount
    stor.append('payment_references', {
                'type1': 'Wallet Transaction', 'name1': pe.name})

    return stor
