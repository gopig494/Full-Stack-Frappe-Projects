# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class StockEntryb(Document):
	def on_submit(self):
		for d in self.get('product'):
			# frappe.log_error(d.product_id,"kk")
			
			# frappe.log_error(sam,"kk")

			if (self.purpose=="Material Receipt"):
				re = frappe.new_doc("Stock Ledger")
				re.date=self.date
				re.product_id =d.product_id
				re.product_name =d.product_name
				re.actual_qty=d.quantity
				re.valuation_rate= self.valuation_rate
				re.insert()

				entry = frappe.db.get_list("Binb",filters={"product_name":d.product_name},fields={"actual_qty","name"})
				frappe.log_error(entry,"kk")
				if entry:
					frappe.msgprint("exists")
					for n in entry:
						s = n.actual_qty + d.quantity
						frappe.log_error(n.name,"kk")
						frappe.db.set_value("Binb",n.name,{
							"actual_qty":s

							})
					else:
						m = frappe.new_doc(("Binb"))
						m.product_name= d.product_name
						m.actual_qty = d.quantity
						m.valuation_rate = sam
						m.insert()



				
