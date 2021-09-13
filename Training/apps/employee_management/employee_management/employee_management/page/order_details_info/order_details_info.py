from __future__ import unicode_literals
import frappe

def get_context(context):
    context.payments = frappe.db.get_list('Order Menu Info',filters={'docstatus':1}, fields=['name','post_date','customer_name','price'])

# @frappe.whitelist()
# def get_payment():
# 	orders = frappe.db.get_list('Order Menu Info',filters={'docstatus':1}, fields=['name','post_date','customer_name','price'])
# 	return orders
# 	