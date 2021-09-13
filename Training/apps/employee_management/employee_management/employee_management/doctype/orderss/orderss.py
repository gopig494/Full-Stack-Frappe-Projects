# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.website.website_generator import WebsiteGenerator
import json
from frappe.utils import flt, comma_or, nowdate, getdate
from frappe import _

class Orderss(WebsiteGenerator):


	def validate(self):
		if self.product_price:
			self.total = self.product_price
		if self.published:
			self.make_route()

	def make_route(self):

		
		self.route = self.scrub(self.product_name)
			# frappe.log_error(self.route,"kk")

	


			

	# def get_context(self, context):
	# 	# show breadcrumbsccccc
	# 	pass

	'''def on_submit(self):
		insert_user(self)

	def on_cancel(self):
		
		cancel_doc(self)'''


# @frappe.whitelist(allow_guest=True)
# def cancel_doc(self):

	#result =frappe.db.sql('''select p.name from `tabPayments` p, `tabRef` r where r.parent=p.name and r.type="Orderss" and r.namee=%s''',self.name,as_dict=1)

	# for d in result:

	#re = frappe.get_doc({"doctype":"Payments","name":d.name})
	# re.cancel()
'''@frappe.whitelist(allow_guest=True)
def insert_user(self):
	
	result= frappe.get_doc({
			"doctype": "Payments","customer_name":self.customer_name,"payment_type":"Pay","payment_mode":"Cash","paid_amount":"160"
		})
	result.append("ref",{"type":"Orderss","namee":self.name})
	result.insert()'''


# @frappe.whitelist(allow_guest=True)
# def new_entry(self):
# 	re = frappe.get_doc("Orderss", self)
# 	result = frappe.new_doc("Payments")
# 	result.customer_name = re.customer_name
# 	result.payment_type = "Pay"
# 	result.payment_mode = "Cash"
# 	result.payment_date = nowdate()
# 	result.paid_amount = re.outstanding
# 	if re.paid_amount:
# 		re.total = re.total-re.paid_amount

# 	result.append("ref", {"type": "Orderss",
# 				  "namee": re.name, "total": re.total})
# 	return result


# @frappe.whitelist()
# def get_payments(orderss):
# 	payments = frappe.db.sql(
# 		'''select p.name,p.paid_amount,p.payment_date,r.outstanding,r.total from `tabPayments` p, `tabRef` r where r.parent=p.name and r.type="Orderss" and r.namee=%s''', orderss, as_dict=1)
# 	return payments
