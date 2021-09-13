# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class CustomerRegistrationMenuVivek(Document):
	def on_update(self):
		if self.status == "Approved":
			if not frappe.db.exists("Customer Info Menu",{"email":self.email}):
				if not frappe.db.exists("Customer Info Menu",{"phone":self.phone}):
					customer = frappe.new_doc("Customer Info Menu")
					customer.first_name = self.first_name,
					customer.last_name = self.last_name,
					customer.gender = self.gender,
					customer.email = self.email,
					customer.phone = self.phone,
					customer.password = self.password,
					customer.sequrity_qus = self.sequrity_qus,
					customer.answer = self.answer
					customer.save()
					frappe.db.set_value("Customer Registration Menu Vivek",self.name,"reference",customer.name)
				else:
					frappe.throw("Already Phone Number Exist")
			else:
				frappe.throw("Already Email Exist")
				

@frappe.whitelist()
def customer_register(first_name,last_name,gender,email,phone,password,sequrity_qus,answer):
	# CheckEmail = frappe.db.exists("Customer Registration Menu Vivek",{"email":email})
	# CkeckPhone = frappe.db.exists("Customer Registration Menu Vivek",{"phone":phone})
	# if CheckEmail or CkeckPhone:
	# 	return "Phone Number Or Email ID already Exixt"
	# else:
	# 	record = frappe.new_doc("Customer Registration Menu Vivek")
	# 	record.first_name = first_name
	# 	record.last_name = last_name
	# 	record.gender = gender
	# 	record.email = email
	# 	record.phone = phone
	# 	record.password = password
	# 	record.sequrity_qus = sequrity_qus
	# 	record.answer = answer
	# 	record.insert()
	if not frappe.db.exists("Customer Registration Menu Vivek",{"email":email}):
		if not frappe.db.exists("Customer Registration Menu Vivek",{"phone":phone}):
			record = frappe.new_doc("Customer Registration Menu Vivek")
			record.first_name = first_name
			record.last_name = last_name
			record.gender = gender
			record.email = email
			record.phone = phone
			record.password = password
			record.sequrity_qus = sequrity_qus
			record.answer = answer
			record.insert()
			# return record
		else:
			return "Phone Number Already exist"
	else:
		return "Email ID Already exist"
