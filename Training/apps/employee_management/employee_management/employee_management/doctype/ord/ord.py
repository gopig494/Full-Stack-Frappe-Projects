# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
# import frappe
from frappe.model.document import Document

class Ord(Document):
	def validate(self):
		total = 0
		for d in self.get('product_details'):
			 
			
			total += int(d.product_price)
			self.total_amount = total


			# self.total = mow
	


# @frappe.whitelist()
# def get_pro(orderb):
# 	source = frappe.db.sql(''' select * from `tabOrderb` where name = %s''',orderb,as_dict=1)
# 	for i in source:

# 		# frappe.log_error(i,"kk")
# 		sam = frappe.db.sql(''' select product_total from `tabProductdetb` where parent = %s''',i.name,as_dict=1)
# 		for d in sam:
# 			mow = sum(float(d.product_total) for d in sam)
# 			return mow
			



