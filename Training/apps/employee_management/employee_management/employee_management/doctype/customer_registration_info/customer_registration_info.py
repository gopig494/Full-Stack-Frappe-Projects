# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class CustomerRegistrationInfo(Document):
	def on_update(self):
		if self.status == "Approved":
			cus_info = frappe.new_doc("Customer Information")
			cus_info.first_name = self.first_name,
			cus_info.last_name = self.last_name,
			cus_info.email = self.email,
			cus_info.phone = self.phone,
			cus_info.password = self.password,
			cus_info.insert()
			frappe.db.set_value("Customer Registration Info",self.name,"cus_reference",cus_info.name)

@frappe.whitelist()
def insert_rec(firstname,lastname,emaill,phoneno,password):
	print("______________________________________________________________________________")
	print(firstname)
	check_email = frappe.db.exists('Customer Registration Info', {'email': emaill})
	check_phone = frappe.db.exists('Customer Registration Info', {'phone': phoneno})
	
	
	print("______________________________________________________________________________")
	print(check_email)
	print("______________________________________________________________________________")


	if check_email or check_phone:
		return "The Email Is Already Exists / Phone Number Is Already Exists"

	else:
		rec = frappe.new_doc("Customer Registration Info")
		rec.first_name = firstname
		rec.last_name = lastname
		rec.email = emaill
		rec.phone = phoneno
		rec.password = password
		rec.insert()


# @frappe.whitelist(allow_guest=True)
# def make_approved(self):
# 	rec = frappe.get_doc("Customer Registration Info",self)
# 	result= frappe.new_doc("Customer Info")
# 	result.party_name = rec.customer_name
# 	result.paid_amount = rec.outstanding_amt
# 	result.posting_date = rec.order_date	
# 	result.append("payment_references",{"type":"Orders Menu Info","ref_name":rec.name,"total_amount":rec.total_price})
# 	return result



