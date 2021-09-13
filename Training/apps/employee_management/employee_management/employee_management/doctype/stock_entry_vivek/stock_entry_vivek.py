# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import flt

class StockEntryVivek(Document):
	def validate(self):
		if self.product_info:
			for i in self.get("product_info"):
				if i.qty:
					i.total = flt(i.qty)*flt(i.price)
				else:
					frappe.throw("Qty Is Mandatry")
					# i.qty = 0
					# i.total = flt(i.price)
	
	# def before_submit(self):
	# 	if(self.purpose == Material Receipt):
	# 		for i in self.get("product_info"):
	# 			product = frappe.get_doc("Product Stock Vivek",i.product_id)
	# 			doc = frappe.get_doc("Stock Ledger Vivek")
	# 			doc.data_1 = self.stoct_entry_date
	# 			doc.product_id = i.product_id
	# 			doc.product_name = product.product_name
	# 			doc.actual_quantity = product.opening_stock
	# 			doc.valuation_amount = i.total
	# 			doc.after_transaction_qty = flt(product.opening_stock) + flt(i.qty)
	# 			doc.insert()

	# 	if(self.purpose == Material Transfer):
	# 		for i in self.get("product_info"):
	# 			product = frappe.get_doc("Product Stock Vivek",i.product_id)
	# 			if i.qty <= product.opening_stock:
	# 				# product = frappe.get_doc("Product Stock Vivek",i.product_id)
	# 				doc = frappe.get_doc("Stock Ledger Vivek")
	# 				doc.data_1 = self.stoct_entry_date
	# 				doc.product_id = i.product_id
	# 				doc.product_name = product.product_name
	# 				doc.actual_quantity = product.opening_stock
	# 				doc.valuation_amount = i.total
	# 				doc.after_transaction_qty = flt(product.opening_stock) - flt(i.qty)
	# 				doc.insert()
	# 			else:
	# 				frappe.throw("QTY is higger than Opening stack")