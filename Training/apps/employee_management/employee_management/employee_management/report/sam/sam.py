# Copyright (c) 2013, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe

def execute(filters=None):
	columns, data = [], []
	columns=get_columns()
	data=custom(filters)

	return columns, data, None,
	
def get_columns():

	columns = [
		"Customer Name" + ":Link/Wallet Transactionb:200",
		"Payment Type" + ":Data:200",
		"Amount" + ":Currency:200",
		"Date" + ":Data:200",
	]
	
	return columns

def custom(filters):
	condition=''
	if filters.get('customer'):
		condition+='  and customer ="%s"' % filters.get('customer')
	if filters.get('payment_type'):
		condition+='  and payment_type ="%s"' % filters.get('payment_type')
		
	sam = frappe.db.sql('''select customer,payment_type,amount,date from `tabWallet Transactionb` where docstatus=1 {condition} '''.format(condition=condition),as_list=1)
	return sam

