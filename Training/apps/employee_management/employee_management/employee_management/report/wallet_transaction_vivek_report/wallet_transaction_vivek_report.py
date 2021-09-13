# Copyright (c) 2013, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe

def execute(filters=None):
	columns, data = [], []
	if not filters: filters={}
	columns=get_columns()
	data=customer_report(filters)
	return columns, data, None,

def get_columns():
	columns = [
		"Customer Name" +":Data:120",
		"Payment Status" + ":Data:120",
		# "Shipping Status" + ":Data:120",
		"Date" + ":Date:120",
		"Amount" + ":Data:120"
	]
	return columns
	
def customer_report(filters):
	condition=''
	if filters.get('customer_name'):
		condition+=' and customer_name ="%s"' % filters.get('customer_name')
	if filters.get('payment_type'):
		condition+=' and payment_type ="%s"' % filters.get('payment_type')
	string = frappe.db.sql('''select customer_name,payment_type,date,amount from `tabWallet Transaction Vivek` where docstatus=1 {condition}'''.format(condition=condition),as_list=1)
	return string
