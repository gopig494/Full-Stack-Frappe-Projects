# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.utils import getdate

from frappe.model.document import Document

class Productb(Document):
	def after_insert(self):
		if self.stock_item:
			re = frappe.new_doc("Stock Entryb")
			total = int(self.product_price) * (self.stock_item)
			frappe.log_error(total,"kk")
			re.purpose = "Material Receipt"
			re.date = getdate()
			re.total_amount = total
			re.docstatus = 1
			re.valuation_rate= self.valuation_rate
			re.append("product",{"product_id":self.name,"product_name":self.product_name,"price":self.product_price,"quantity":self.stock_item,"total":total})
			re.insert()


@frappe.whitelist()
def update_stock(stock,vr,purpose,name):
	frappe.log_error(name,"kk")
	
	
	




			 

		
