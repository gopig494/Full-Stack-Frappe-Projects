# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import flt, comma_or, nowdate, getdate

class Payments(Document):
	def validate(self):
			for d in self.get('ref'):
				out =flt(d.total)- flt(self.paid_amount)
				d.outstanding = out
				d.allocated = self.paid_amount

	def on_submit(self):

		for d in self.get("ref"):
			re = frappe.get_value("Orderss",d.namee,"paid_amount")
			frappe.db.set_value("Orderss",d.namee,{
			"paid_amount":flt(re)+flt(self.paid_amount)
			})

			
			
			frappe.db.set_value("Orderss",d.namee,{
			"outstanding":d.outstanding
			})
			

			if flt(self.paid_amount)<flt(d.total):
				frappe.db.set_value("Orderss",d.namee,{
					'payment_status':'Partially paid'
					})
			elif flt(self.paid_amount)==flt(d.total):
				frappe.db.set_value("Orderss",d.namee,{
					'payment_status':'Paid'
					})
			elif self.paid_amount == 0:
				frappe.db.set_value("Orderss",d.namee,{
					'payment_status':'Unpaid'
					})




			#if flt(self.paid_amount)<flt(total):
				#frappe.db.set_value("")
				#res = frappe.set_value("Payments",{"paid_amount":self.paid_amount})
				#if flt(self.paid_amount)<flt(total):
					#frappe.set_value("Payments",{"payment_status":"unpaid"})

