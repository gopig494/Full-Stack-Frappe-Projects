# Copyright (c) 2013, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe

def execute(filters=None):
	columns, data = [], []
	if not filters: filters={}
	columns=get_columns()
	data=wallet_transaction_info_report(filters)
	# chart = get_chart_data(filters)
	return columns, data, None,

def get_columns():
	columns = [
		"Customer" + ":Data:120",
		"Payment Type" + ":Data:120",
		"Amount" + ":Data:120",
		"Date Time" + ":Date:120",
		"Note" + ":Data:120",
		# "Customer Email" + ":Data:120",
		# "Customer Phone" + ":Data:120",
		
		# "Total Amount" + ":Currency:120",
		# "Order From" + ":Data:120",
		
	]
	# if check_domain('multi_vendor'):
	# 	columns.append("Commission Amount" + ":Currency:140")
	# 	columns.append("Total Amount For Vendor" + ":Currency:170")
	
	return columns
	
def wallet_transaction_info_report(filters):
	condition=''
	if filters.get('customer'):
		condition+=' and customer="%s"' % filters.get('customer')
	if filters.get('payment_type'):
		condition+=' and payment_type="%s"' % filters.get('payment_type')
	if filters.get('amount'):
		condition+=' and amount="%s"' % filters.get('amount')
	if filters.get('date_time'):
		condition+=' and date_time="%s"' % filters.get('date_time')
	rec = frappe.db.sql('''select customer,payment_type,amount,date_time,note from `tabWallet Transaction Info` where docstatus=1 {condition} '''.format(condition=condition),as_list=1)
	return rec

