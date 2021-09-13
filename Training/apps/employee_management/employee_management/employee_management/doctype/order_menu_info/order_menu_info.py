# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.website.website_generator import WebsiteGenerator

class OrderMenuInfo(WebsiteGenerator):
	def validate(self):
		if self.price:
			self.outstanding_amount = self.price
			self.paid_amount = self.price
		self.make_route()
	# def on_submit(self):
	# 	docInsert = frappe.get_doc({
	# 			"doctype":"Payment Menu",
	# 			"posting_date": self.post_date,
	# 			"party_name": self.customer_name,
	# 			"party":self.order_item_id,
	# 			"paid_amount": self.paid_amount,
	# 			"allocate_payment_amout": True,})
	# 	docInsert.append("payment_reference",{"type":"Order Menu Info","name1":self.name})
	# 	docInsert.submit()
	def make_route(self):
		self.route =  self.scrub(self.customer_name)

@frappe.whitelist(allow_guest=True)
def make_payment(self):
	re = frappe.get_doc("Order Menu Info",self)
	result= frappe.new_doc("Payment Menu")
	result.party_name = re.customer_name
	result.party = re.order_item_id
	result.paid_amount = re.outstanding_amount
	result.posting_date = re.post_date
	result.append("payment_reference",{"type":"Order Menu Info","name1":re.name,"total_amount":re.price})
	return result

@frappe.whitelist()
def get_payments(orders):
    payments=frappe.db.sql('''select p.posting_date, p.name,p.paid_amount,r.outstanding,r.total_amount from `tabPayment Menu` p, `tabReference Menu` r where r.parent=p.name and r.type="Order Menu Info" and r.name1=%s''',orders,as_dict=1)
    return payments