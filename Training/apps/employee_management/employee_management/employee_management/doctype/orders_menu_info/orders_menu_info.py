# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.website.website_generator import WebsiteGenerator

class OrdersMenuInfo(WebsiteGenerator):

		# def make_route(self):
		# if not self.route:
		# 	self.route = self.scrub(self.coustomer_name)
		# check_exist = frappe.get_list('Orders Menu Info', fields=["coustomer_name"] , filters={"route": self.route,"name":('!=',self.name)},ignore_permissions =True)
		# if check_exist and len(check_exist) > 0:
		# 	st = str(len(check_exist))
		# 	if self.restaurant:
		# 		abbr = frappe.db.get_value('Business', self.restaurant, 'abbr')
		# 		if abbr:
		# 			st = abbr.lower()
		# 	self.route = self.scrub(self.coustomer_name) + "-" + st


	def validate(self):
		self.outstanding_amt = self.total_price
		self.paid_amount = self.total_price
		self.make_route()



	def make_route(self):
		self.route = self.scrub(self.customer_name)

# if(doc.docstatus===1) {
# 				return [__("Submitted"), "green", "doc.docstatus,=,Submitted"];
# 			}



# @frappe.whitelist()
# def get_order(self):
#     doc=frappe.get_doc({
#         "doctype": "Payment Module Info",
#         "payment_type": 'Pay',
#         "mode_of_payment": 'Cash',
#         "posting_date": self.order_date,
#         "party_name": self.customer_name,
#         "product_name": self.product_name,
#         "paid_amount": self.paid_amount,
#         # "docstatus": 1
#     })
#     doc.append("payment_references", {
#                "type": "Orders Menu Info", "ref_name": self.name})
#     doc.insert()

@frappe.whitelist(allow_guest=True)
def make_payment(self):
	rec = frappe.get_doc("Orders Menu Info",self)
	result= frappe.new_doc("Payment Module Info")
	result.party_name = rec.customer_name
	result.paid_amount = rec.outstanding_amt
	result.posting_date = rec.order_date	
	result.append("payment_references",{"type":"Orders Menu Info","ref_name":rec.name,"total_amount":rec.total_price})
	return result


@frappe.whitelist()
def get_order_payment(orders):
	payment=frappe.db.sql('''select p.name,p.posting_date,p.paid_amount,r.outstanding_amt,r.total_amount from `tabPayment Module Info` p, `tabPayment References Info` r where r.parent=p.name and r.type="Orders Menu Info" and r.ref_name=%s''',orders,as_dict=1)
	return payment

		

@frappe.whitelist(allow_guest=True)
def get_order():
	product = frappe.db.sql('''select order_status,customer_name,order_date,payment_status,total_amount,name from `tabOrders Module Info`''')
	# for i in product:
	# 	print(i)
	# print("_________________________________________________________________________^*%^%*(%(*")
	return product


@frappe.whitelist(allow_guest=True)
def update_order(customername,name):
	# print(customername)
	# print("___________________________________________________________________")
	# frappe.db.set_value("Orders Menu Info",name,"order_status",order)
	frappe.db.set_value("Orders Menu Info",name,"customer_name",customername)
	# frappe.db.set_value("Orders Menu Info",name,"order_date",orderdate)
	# frappe.db.set_value("Orders Menu Info",name,"payment_status",paymentstatus)
	# frappe.db.set_value("Orders Menu Info",name,"total_amount",totalamount)


	