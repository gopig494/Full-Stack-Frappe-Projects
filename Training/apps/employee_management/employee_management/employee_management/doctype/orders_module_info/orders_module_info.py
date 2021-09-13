# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
# import frappe
from frappe.model.document import Document

class OrdersModuleInfo(Document):
	# pass
	def validate(self):
		total_amtount =0
		for i in self.get("product"):
			total_amtount = i.product_price + total_amtount
		self.total_amount = total_amtount
       