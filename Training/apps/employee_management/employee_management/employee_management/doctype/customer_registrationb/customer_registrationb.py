# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from six import iteritems, string_types
import json

class CustomerRegistrationb(Document):
	
	pass
# 	def autoname(self):
# 		self.name = self.first_name
	
# 	def validate(self):
# 		# if frappe.db.exists("Customer Registrationb",'email':self.email):

# 		# 	frappe.throw("hii")
# 		if frappe.db.exists({'doctype': 'Customer Registrationb','email':self.email}):
# 			frappe.throw("hii")



			
# 	def on_update(self):
# 		# entry = frappe.db.get_list("Customerb",filters={'email':self.email},fields={'name'})
# 		# frappe.log_error(entry,"kd")

# 		if (self.status=="Approved"):
# 			re = frappe.new_doc("Customerb")
# 			re.first_name = self.first_name
# 			re.last_name = self.last_name
# 			re.email = self.email 
# 			re.phone = self.phone
# 			re.password = self.password
# 			re.save()


# @frappe.whitelist(allow_guest=True)
# def insert_doc(doc):
	

	
# 	if isinstance(doc, string_types):
# 		doc = json.loads(doc)
		

	
# 	re = frappe.new_doc("Customer Registrationb")
# 	re.first_name = doc.get('first_name')
# 	re.last_name = doc.get('last_name')
# 	re.email = doc.get('email')
# 	re.phone = doc.get('phone')
# 	re.password = doc.get('password')

# 	re.save()

# 	frappe.log_error(re,"kk")


# 	return re__dict__