from __future__ import unicode_literals
import frappe

@frappe.whitelist()
def get_insert(fname,lname,phone,email,password):
	
	re = frappe.new_doc("Customer Registrationb")

	re.first_name = fname
	re.last_name = lname
	re.email = email
	re.phone = phone
	re.password = password
	
	re.save()

	