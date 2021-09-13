# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.utils import flt, comma_or, nowdate, getdate

from frappe.model.document import Document

class Paymententryb(Document):
	def validate(self):
		for d in self.get('reference'):
			out =flt(d.total)- flt(self.paid_amount)
			d.outstanding = out
			d.allocated = self.paid_amount



	def on_submit(self):

		for d in self.get("reference"):
		# re = frappe.get_value("Orderss",d.namee,"paid_amount")
		# frappe.db.set_value("Orderss",d.namee,{
		# "paid_amount":flt(re)+flt(self.paid_amount)
		# })

		
		
			frappe.db.set_value("Ord",d.namee,{
			'payment_status':'Paid'
			})
		
