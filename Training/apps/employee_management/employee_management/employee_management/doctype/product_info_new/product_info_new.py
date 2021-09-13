# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class ProductInfoNew(Document):
	pass
	
@frappe.whitelist(allow_guest=True)
def delete_rec(products):
    rec = frappe.get_doc({
        'doctype': 'Product Variants info',
        'name': products
    })
    rec.delete()
    return rec


# @frappe.whitelist()
# def get_product(products):
# 	product=frappe.db.sql(''' 
		
# 						select product_variant 
# 						from `Product Info New`

# 						''')
# 	return product
