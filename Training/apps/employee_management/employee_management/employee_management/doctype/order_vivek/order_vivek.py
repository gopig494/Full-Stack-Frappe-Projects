# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import flt, comma_or, nowdate, getdate

class OrderVivek(Document):
	def validate(self):
		total_amt = 0
		for d in self.get("product_info"):
			total_amt += d.product_price
		self.total_amount = total_amt

# @frappe.whitelist(allow_guest=True)
# def make_payment(cur_form):
#     orderDoctype = frappe.get_doc("Order Vivek", cur_form)
#     paymentDoctype = frappe.new_doc("Payment Vivek")
#     paymentDoctype.party_name = orderDoctype.customer_name
#     paymentDoctype.date = nowdate()
#     paymentDoctype.paid_amount = orderDoctype.total_amount
#     paymentDoctype.append('type':'Order Vivek','name1':orderDoctype)
    # stor.payment_type = 'Pay'
    # stor.mode_of_payment = 'Debit Card'
    # stor.posting_date = pe.date
    # stor.party_name = pe.customer_name
    # stor.party = pe.product_id
    # stor.paid_amount = pe.outstanding_amount
    # stor.append('payment_references', {
    #             'type1': 'Wallet Transaction', 'name1': pe.name, 'total_amount': pe.outstanding_amount})
    # return stor