from __future__ import unicode_literals
import frappe


def get_context(context):
	orders = frappe.db.get_list('Orderss',filters={'docstatus':1}, fields=['name', 'creation','total' ])
	frappe.log_error(orders,"kk")
	context.orders=orders
	
	
	