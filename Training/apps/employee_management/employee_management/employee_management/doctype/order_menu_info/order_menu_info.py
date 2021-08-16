# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class OrderMenuInfo(Document):
	def validate(self):
		pass
		# if paid_amount:
		# 	if price:
		# if self.customer_name and self.date and self.order_item_id and self.paid_amount:
		# 	docInsert = frappe.get_doc({
		# 	"doctype":"Payment Menu",
		# 	"payment_type": "Pay",
		# 	"mode_of_payment": "Cash",
		# 	"posting_date": self.date,
		# 	"party_name": self.customer_name,
		# 	"party":self.order_item_id,
		# 	"paid_amount": self.paid_amount,
		# 	"allocate_payment_amout": True,
		# 	# "payment_reference":{"type":"Order Menu","name1":self.name}
		# 	})
		# 	docInsert.append("payment_reference",{"type":"Order Menu","name1":self.name})
	# def after_insert(self):
	# 	if self.customer_name and self.date and self.order_item_id:
	# 		docInsert = frappe.get_doc({
	# 			"doctype":"Payment Menu",
	# 			"posting_date": self.date,
	# 			"party_name": self.customer_name,
	# 			"party":self.order_item_id,
	# 			"paid_amount": self.paid_amount,
	# 			"allocate_payment_amout": True,})
	# 		docInsert.append("payment_reference",{"type":"Order Menu Info","name1":self.name})
	# 		docInsert.submit()

	# def before_cancel(self):
	# 	# def get_customer_payments(order):
	# 	payments = frappe.db.sql('''select DISTINCT p.name from `tabPayment Menu` p, `tabReference Menu` r where r.parent=p.name and r.type="Order Menu" and r.name1=%s''',self.name,as_dict=1)
		
	# 	for d in range(len(payments)):
	# 		print("-------------------------------------------------------------")
	# 		print(payments[d].name)
	# 		print("--------------------------------------------------------------")
	# 		doc = frappe.get_doc({"doctype":"Payment Menu","name":str(payments[d].name)})
	# 		doc.docstatus = 2
	# 		doc.save()

		# payments = frappe.db.sql('''select DISTINCT p.name from `tabPayment Menu` p, `tabReference Menu` r where r.parent=p.name and r.type="Order Menu" and r.name1=%s''',self.name,as_dict=1)
		# if payments:
		# 	frappe.get_doc({
		# 		"doctype":"Payment Menu",
		# 		"docstatus": 2,
		# 		"name": payments
		# 		}).insert()
		# return payment
		# frappe.get_doc({"doctype":"Payment Menu","docstatus":2,}).insert
		# for d in self.get("payment_reference"):
		# 	AutoId=frappe.db.sql("select * from `tabPayment Menu` where name1=%s ",(d.name1),as_dict=True)

		# frappe.get_doc({
		# 		"doctype":"Payment Menu",
		# 		"docstatus": 2,
		# 		"name": AutoId
		# 		}).insert()
# @frappe.whitelist(allow_guest=True)
# def make_payment(payment_status=None, payment_type=None, mode_of_payment=None, posting_date=None, party_name=None, party=None, paid_amount=0, allocate_payment_amout=True):
# 	pe = frappe.new_doc("Payment Menu")

@frappe.whitelist(allow_guest=True)
def make_payment(self):
	re = frappe.get_doc("Order Menu Info",self)
	result= frappe.new_doc("Payment Menu")
	result.party_name = re.customer_name
	result.party = re.order_item_id
	# result.payment_type = "Pay"
	# result.mode_of_payment = "Cash"
	
	result.paid_amount = re.paid_amount
	result.posting_date = re.post_date


		
	result.append("payment_reference",{"type":"Order Menu Info","name1":re.name})
	return result