# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class WalletTransactionb(Document):
	pass




	def on_submit(self):
		entry = frappe.db.get_list("Wallet Entryb",filters={'customer_name':self.customer},fields={'current_wallet_amount','name'})
		frappe.log_error(entry,"kd")
		
		if entry:
			for d in entry:
				if (self.payment_type=="Pay"):

					am = d.current_wallet_amount + self.amount
					# frappe.log_error(d,"kf")
					frappe.db.set_value("Wallet Entryb",d.name,{
			 			'current_wallet_amount':am,
			 			'last_updated_date': self.date,
			 		})
				elif(self.payment_type=="Receive"):
					am = d.current_wallet_amount - self.amount
					# frappe.log_error(d,"kf")
					frappe.db.set_value("Wallet Entryb",d.name,{
			 			'current_wallet_amount':am,
			 			'last_updated_date': self.date,
			 		})

		else:
			
			re = frappe.new_doc("Wallet Entryb")

			re.customer_name = self.customer
			re.current_wallet_amount = self.amount
			re.last_updated_date = self.date
			re.insert()

		

