# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import flt, comma_or, nowdate, getdate
class PaymentVivek(Document):
	def validate(self):
		for d in self.get("payment_reference"):
			if flt(self.paid_amount) == flt(d.total_amount):
				self.payment_status = "Paid"
				#frappe.db.set_value("Order Vivek",d.name1,"order_status","In Progress")
				#frappe.db.set_value("Order Vivek",d.name1,"payment_status","Paid")
	def on_submit(self):
		for d in self.get("payment_reference"):
			frappe.db.set_value("Order Vivek",d.name1,"payment_status","Paid")
			# # d.total_amount = flt(frappe.db.get_value(d.type, d.name1, 'outstanding_amount'))
			# if flt(d.total_amount) >= flt(self.paid_amount):
			# 	d.allocated = flt(self.paid_amount)
	 	# 		#d.total_amount = flt(frappe.db.get_value(d.type, d.name1, 'price'))
	 	# 		d.outstanding = flt(d.total_amount) - flt(d.allocated)
	 	# 		# a = frappe.get_last_doc("Order Menu Info")
	 	# 		# idd = a.name
	 	# 		#frappe.db.set_value("Order Menu Info",d.name1,"outstanding_amount",d.outstanding)
	 	# 		# if flt(self.paid_amount) == 0:
	 	# 		# 	self.payment_status = "Unpaid"
	 	# 		if flt(self.paid_amount) == flt(d.total_amount):
	 	# 			self.payment_status = "Paid"
	 	# 			#frappe.db.set_value("Payment Menu",self.name,"payment_status","Paid")
	 	# 		if flt(self.paid_amount) != 0 and flt(d.outstanding) != 0:
	 	# 			self.payment_status = "Partialy Paid"
	 	# 			#frappe.db.set_value("Payment Menu",self.name,"payment_status","Partialy Paid")

