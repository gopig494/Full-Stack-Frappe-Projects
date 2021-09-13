# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class ProductVivek(Document):
	pass
# @frappe.whitelist()
# def get_product_details(product):
# 	products = frappe.db.sql('''select p.product_name,p.product_price,p.product_description , from `tabProduct Vivek` p, `tabCategory Vivek` r INNER JOIN p ON r.name = p.=%s''',product,as_dict=1)
# 	return products
#    