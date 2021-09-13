# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import flt

class WalletTransactionVivek(Document):
	def before_submit(self):
		if self.payment_type == "Pay" :
			WalletAmount = frappe.db.get_value("Wallet Entry Vivek", self.customer_name, "amount")
			if flt(self.amount) !=0:
				WalletAmount = flt(WalletAmount) + flt(self.amount)
				frappe.db.set_value("Wallet Entry Vivek", self.customer_name, "amount",WalletAmount)
				frappe.db.set_value("Wallet Entry Vivek", self.customer_name, "last_transaction_datetime",self.date)
				frappe.msgprint("Successfully Amount Debited","Wallet Entry")
			else:
				frappe.throw("Amount shoud be gratterthan zero")
		if self.payment_type == "Receive" :
			WalletAmount = frappe.db.get_value("Wallet Entry Vivek", self.customer_name, "amount")
			if flt(self.amount) <= flt(WalletAmount) and flt(WalletAmount) !=0:
				WalletAmount = flt(WalletAmount) - flt(self.amount)
				frappe.db.set_value("Wallet Entry Vivek", self.customer_name, "amount",WalletAmount)
				frappe.db.set_value("Wallet Entry Vivek", self.customer_name, "last_transaction_datetime",self.date)
				frappe.msgprint("Successfully Amount Cridited","Wallet Entry")
			else:
				frappe.throw("Not sufficient Amount")
	def on_cancel(self):
		if self.payment_type == "Pay" :
			WalletAmount = frappe.db.get_value("Wallet Entry Vivek", self.customer_name, "amount")
			# if flt(self.amount) !=0:
			WalletAmount = flt(WalletAmount) - flt(self.amount)
			frappe.db.set_value("Wallet Entry Vivek", self.customer_name, "amount",WalletAmount)
			# frappe.db.set_value("Wallet Entry Vivek", self.customer_name, "amount",WalletAmount)
			WalletAmountexample = frappe.db.get_value("Wallet Entry Vivek", self.customer_name, "amount")
			frappe.log_error(WalletAmountexample,"walet transaction")
			frappe.db.set_value("Wallet Entry Vivek", self.customer_name, "last_transaction_datetime",self.date)
				# frappe.msgprint("Successfully Amount Debited","Wallet Entry")
			# else:
			# 	frappe.throw("Amount shoud be gratterthan zero")
		if self.payment_type == "Receive" :
			WalletAmount = frappe.db.get_value("Wallet Entry Vivek", self.customer_name, "amount")
			# if flt(self.amount) >= flt(WalletAmount) and flt(WalletAmount) !=0:
			WalletAmount = flt(WalletAmount) + flt(self.amount)
			frappe.db.set_value("Wallet Entry Vivek", self.customer_name, "amount",WalletAmount)
			frappe.db.set_value("Wallet Entry Vivek", self.customer_name, "last_transaction_datetime",self.date)
				# frappe.msgprint("Successfully Amount Cridited","Wallet Entry")
			# else:
			# 	frappe.throw("Not sufficient Amount")