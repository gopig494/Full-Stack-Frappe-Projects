# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
import json
from frappe.utils import flt, comma_or, nowdate, getdate


class Orderss(Document):
	def validate(self):
		if self.product_price:
			self.total = self.product_price
		
		

		
	'''def on_submit(self):
		insert_user(self)

	def on_cancel(self):
		
		cancel_doc(self)'''
				
	

#@frappe.whitelist(allow_guest=True)
#def cancel_doc(self):

	#result =frappe.db.sql('''select p.name from `tabPayments` p, `tabRef` r where r.parent=p.name and r.type="Orderss" and r.namee=%s''',self.name,as_dict=1)
	
	#for d in result:
		
		#re = frappe.get_doc({"doctype":"Payments","name":d.name})
		#re.cancel()

'''@frappe.whitelist(allow_guest=True)
def insert_user(self):
	
	result= frappe.get_doc({
			"doctype": "Payments","customer_name":self.customer_name,"payment_type":"Pay","payment_mode":"Cash","paid_amount":"160"
		})
	result.append("ref",{"type":"Orderss","namee":self.name})
	result.insert()'''

@frappe.whitelist(allow_guest=True)
def new_entry(self):
	re = frappe.get_doc("Orderss",self)
	result= frappe.new_doc("Payments")
	result.customer_name= re.customer_name
	result.payment_type="Pay"
	result.payment_mode="Cash"
	result.paid_amount=re.outstanding
	

		
	result.append("ref",{"type":"Orderss","namee":re.name})
	return result

@frappe.whitelist()
def get_payments(orderss):
	payments=frappe.db.sql('''select p.name,p.posting_date,p.paid_amount,r.outstanding_amount from `tabPayments` p, `tabRef` r where r.parent=p.name and r.reference_doctype="Orderss" and r.reference_name=%s''',orderss,as_dict=1)
	return payments