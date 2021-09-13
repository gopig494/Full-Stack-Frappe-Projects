# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class ProductAssesmentTest(Document):
	pass

@frappe.whitelist()
def update_call(product_attribute,is_required,control_type,display_order,size_chart,name):
	frappe.db.set_value('Product Variant Assesment', name, {
    'product_attribute':product_attribute,
    'is_required': is_required,
    'control_type':control_type,
    'display_order':display_order,
    'size_chart':size_chart
})
# @frappe.whitelist(allow_guest=True)
# def get_record(parentid,childid):
# 	result = frappe.get_doc({
#         'doctype': 'Product Assesment Test',
#         'name': childid
#     })
# 	return result