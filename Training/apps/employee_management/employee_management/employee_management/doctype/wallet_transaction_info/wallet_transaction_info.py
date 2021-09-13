# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import flt

class WalletTransactionInfo(Document):		
	def on_submit(self):
		if self.payment_type == "Pay" :
			Amt = frappe.db.get_value("Wallet Entry Info", self.customer, "current_wallet_amount")
			if flt(self.amount) !=0:
				Amt += flt(self.amount)
				frappe.db.set_value("Wallet Entry Info", self.customer, "current_wallet_amount",Amt)
				frappe.db.set_value("Wallet Entry Info", self.customer, "last_updated_datetime",self.date_time)
				frappe.msgprint("Successfully credited","Wallet Entry Amount")
			else:
				frappe.throw("Amount Should be Gratterthan Zero")
		if self.payment_type == "Receive" :
			Amt = frappe.db.get_value("Wallet Entry Info", self.customer, "current_wallet_amount")
			if flt(self.amount) <= flt(Amt) and flt(Amt) !=0:
				Amt -= flt(self.amount)
				frappe.db.set_value("Wallet Entry Info", self.customer, "current_wallet_amount",Amt)
				frappe.db.set_value("Wallet Entry Info", self.customer, "last_updated_datetime",self.date_time)
				frappe.msgprint("Successfully Debited","Wallet Entry Amount")
			else:
				frappe.throw("Insficient Amount")

	def on_cancel(self):
		if self.payment_type == "Pay" :
			Amt = frappe.db.get_value("Wallet Entry Info", self.customer, "current_wallet_amount")
			# if flt(self.amount) !=0:
			Amt -= flt(self.amount)
			frappe.db.set_value("Wallet Entry Info", self.customer, "current_wallet_amount",Amt)
			frappe.db.set_value("Wallet Entry Info", self.customer, "last_updated_datetime",self.date_time)
			frappe.msgprint("Successfully Debited","Wallet Entry Amount")
			# else:
			# 	frappe.throw("Amount Should be Gratterthan Zero")
		if self.payment_type == "Receive" :
			Amt = frappe.db.get_value("Wallet Entry Info", self.customer, "current_wallet_amount")
			# if flt(self.amount) <= flt(Amt) and flt(Amt) !=0:
			Amt += flt(self.amount)
			frappe.db.set_value("Wallet Entry Info", self.customer, "current_wallet_amount",Amt)
			frappe.db.set_value("Wallet Entry Info", self.customer, "last_updated_datetime",self.date_time)
			frappe.msgprint("Successfully Credited","Wallet Entry Amount")
			# else:
			# 	frappe.throw("Insficient Amount")