# Copyright (c) 2013, Gopi and contributors
# For license information, please see license.txt

# from __future__ import unicode_literals
# # import frappe

# def execute(filters=None):
# 	columns, data = [], []
# 	return columns, data


# Copyright (c) 2013, sivaranjani and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
# from ecommerce_business_store.ecommerce_business_store.api import check_domain


def execute(filters=None):
    columns, data = [], []
    if not filters:
        filters = {}
    columns = get_columns()
    data = customer_report(filters)
    # chart = get_chart_data(filters)
    return columns, data, None,  # chart


def get_columns():
    columns = [
        "Customer Name:Link/Wallet Entry G:300",
        "Payment Type:Select:300",
        "Amount:Currency:300",
        # "Customer Name:dsf:300",
        # "Payment Type:sd:300",
        # "Amount:sf:300",
    ]

    # if check_domain('multi_vendor'):
    # 	columns.append("Commission Amount" + ":Currency:140")
    # 	columns.append("Total Amount For Vendor" + ":Currency:170")

    return columns


def customer_report(filters):
    condition = ''
    if filters.get('customer_name'):
        condition += ' and customer_name="%s"' % filters.get('customer_name')
    if filters.get('payment_type'):
        condition += ' and payment_type="%s"' % filters.get('payment_type')
    if filters.get('amount'):
        condition += ' and amount="%s"' % filters.get('amount')
    customer_order = frappe.db.sql(
        '''select customer_name, payment_type,amount from `tabWallet Transaction G` where docstatus=1 {condition} '''.format(condition=condition), as_list=1)
    print(customer_order)
    return customer_order


# def get_chart_data(filters):
# 	labels = datasets = []
# 	data = get_chart_data_source(filters)
# 	labels = [x[0] for x in data]
# 	value = [x[1] for x in data]
# 	datasets.append({
# 		"title": "Order",
# 		"values": value
# 		})
# 	return {
# 		"data": {
# 			'labels': labels,
# 			'datasets': datasets
# 		},
# 		"type": "line"
# 	}

# def get_chart_data_source(filters):
# 	condition=''
# 	if filters.get('from_date'):
# 		condition+=' and order_date>="%s"' % filters.get('from_date')
# 	if filters.get('to_date'):
# 		condition+=' and order_date<="%s"' % filters.get('to_date')
# 	if filters.get('status'):
# 		condition+=' and status="%s"' % filters.get('status')
# 	if filters.get('payment_status'):
# 		condition+=' and payment_status="%s"' % filters.get('payment_status')
# 	if filters.get('order_from'):
# 		condition+=' and order_from="%s"' % filters.get('order_from')
# 	customer_order = frappe.db.sql('''select order_date,total_amount, total_amount_for_vendor from
# 		`tabOrder` where naming_series !="SUB-ORD-" and docstatus=1 {condition} '''.format(condition=condition),as_list=1)

# 	return customer_order
