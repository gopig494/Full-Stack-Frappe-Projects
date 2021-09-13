# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
# import frappe
from frappe.model.document import Document
from frappe.utils import flt

class StockEntryInfo(Document):
	pass
	def validate(self):
		if self.product_info_se:
			for rec in self.get("product_info_se"):
				if rec.qty:
					rec.total = flt(rec.qty)*flt(rec.product_price)
				else:
					frappe.throw("Quantity is mandatory")

		total_amtount =0
		for i in self.get("product_info_se"):
			total_amtount = i.total + i.total
		self.total_amount = total_amtount
       