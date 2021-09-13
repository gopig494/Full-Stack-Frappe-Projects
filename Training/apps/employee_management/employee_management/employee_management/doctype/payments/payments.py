# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.website.website_generator import WebsiteGenerator
from frappe.utils import flt, comma_or, nowdate, getdate

class Payments(WebsiteGenerator):
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
@frappe.whitelist(allow_guest=True)
def get_child():
	source = frappe.db.sql(''' select * from `tabPayments` where docstatus=1''',as_dict=1)
	for i in source:

		frappe.log_error(i,"kk")
		i.sam = frappe.db.sql(''' select * from `tabRef` where parent = %s''',i.name,as_dict=1)

@frappe.whitelist()
def res_list(s):
	user = frappe.session.user
	if user=="boopathy@gmail.com":
		return "(`tabPayments`.`docstatus`=1)"


@frappe.whitelist()
def res_perm(doc, user):
	

	user = frappe.session.user
	if user=="boopathy@gmail.com":
		if doc.name=="hss" or doc.owner==user:
			return False
			

	
		





	
		
	
		




		

		

			
			


		
		# return res.format(user=frappe.db.escape(user)) 
	# if user == 'boopathy@gmail.com':
		# frappe.throw("welcome")
		# res = frappe.db.get_list('Payments')

		# return res



	# frappe.log_error(user,"kk")
	# res = frappe.db.sql('''select * from  `tabPayments` where docstatus=1 ''',as_dict=1)
	# # frappe.log_error(res,"kk")
	# frappe.log_error(res,"kk")

	# return "(`tabPayments`.owner = 'boopathy@gmail.com' or `tabPayments`.assigned_by = 'boopathy@gmail.com')".format(user=frappe.db.escape(user))
