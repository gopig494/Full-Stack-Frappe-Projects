# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Productvalues(Document):
	pass

@frappe.whitelist()
def insert_attr(product_attribute,is_required,display_order,control_type,name,values):

	# frappe.log_error(values,"hh")
	sam = values
	 

	
	# frappe.log_error(sam.product_attribute,"kk")
	for d in sam:

		frappe.log_error(d.product_attribute,"kk")
	frappe.db.set_value('Product Variants', name, {
    'product_attribute':product_attribute,
    'is_required': is_required,
    'display_order':display_order,
    "control_type":control_type
})

@frappe.whitelist()
def delete_record(name):
	frappe.delete_doc("Product Variants",name)
	
		

@frappe.whitelist()
def get_record(id):
	res = frappe.db.sql('''select * from `tabProduct Variants` where parent = %s''',id,as_dict=1 )
	frappe.log_error(res,"kk")
	
	return res

