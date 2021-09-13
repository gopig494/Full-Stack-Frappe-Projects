# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import flt
class PaymentMenu(Document):
	# pass
	def validate(self):
		if flt(self.paid_amount) or flt(self.paid_amount) == 0:
			if self.allocate_payment_amout:
				for d in self.get("payment_reference"):
					d.total_amount = flt(frappe.db.get_value(d.type, d.name1, 'outstanding_amount'))
					if flt(d.total_amount) >= flt(self.paid_amount):
						d.allocated = flt(self.paid_amount)
	 				 	#d.total_amount = flt(frappe.db.get_value(d.type, d.name1, 'price'))
	 				 	d.outstanding = flt(d.total_amount) - flt(d.allocated)
	 				 	# a = frappe.get_last_doc("Order Menu Info")
	 				 	# idd = a.name

	 				 	#frappe.db.set_value("Order Menu Info",d.name1,"outstanding_amount",d.outstanding)
	 				 	# if flt(self.paid_amount) == 0:
	 				 	# 	self.payment_status = "Unpaid"
	 				 	if flt(self.paid_amount) == flt(d.total_amount):
	 				 		self.payment_status = "Paid"
	 				 		#frappe.db.set_value("Payment Menu",self.name,"payment_status","Paid")
	 				 	if flt(self.paid_amount) != 0 and flt(d.outstanding) != 0:
	 				 		self.payment_status = "Partialy Paid"
	 				 		#frappe.db.set_value("Payment Menu",self.name,"payment_status","Partialy Paid")

	 				else:
	 					frappe.throw(frappe._("Paid Amount Is Grater Then Price Amount"))

			else:
				frappe.throw(frappe._("please Allow Allocate Payment Amount Check Box"))

		else:
			frappe.throw(frappe._("Please Give Paid Amount"))
	def on_submit(self):
		for i in self.get("payment_reference"):
			i.total_amount = flt(frappe.db.get_value(i.type, i.name1, 'outstanding_amount'))
			i.outstanding = flt(i.total_amount) - flt(i.allocated)
			frappe.db.set_value("Order Menu Info",i.name1,"outstanding_amount",i.outstanding)


	# 		for d in self.get("payment_reference"):
	# 			if flt(self.paid_amount)>flt(d.allocated):
	# 				frappe.throw("Amount is greater than allocated total amount!")
	# 			remain=flt(d.total_amount)-flt(self.paid_amount)
	# 			d.outstanding_amount=remain
	# 			d.allocated_amount=self.paid_amount
	# 			if d.reference_doctype == 'Order':
	# 				outstanding = frappe.db.get_value('Order', d.reference_name, 'outstanding_amount')
	# 				if flt(outstanding) < flt(d.allocated_amount):
	# 					frappe.throw(frappe._('Amount is greater than the outstanding amount'))
	 # d.allocated = self.paid_amount
	 # d.total_amount = frappe.db.get_value('Order Menu', d.name1, 'price')
