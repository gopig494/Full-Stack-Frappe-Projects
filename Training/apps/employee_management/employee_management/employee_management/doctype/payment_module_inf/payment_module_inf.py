# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class PaymentModuleInf(Document):
	def validate(self):
		for i in self.get("order_information"):
			# if self.paid_amount = i.total_amount:
				# self.payment_status = 'Paid'
			frappe.db.set_value("Orders Module Info",i.name1,"order_status","In Progress")


	def on_submit(self):
		for i in self.get("order_information"):
			frappe.db.set_value("Orders Module Info",i.name1,"payment_status","Paid")

	