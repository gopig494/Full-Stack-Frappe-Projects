from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

@frappe.whitelist()
def get_list():
	order = frappe.db.get_list('Orders Menu Info',filters={'docstatus':1},
		fields=['name','order_date','total_price'])
	return order

# def get_context(context):
# 	def ():
# 		order = frappe.db.get_list('Orders Menu Info',filters={'docstatus':1},
# 			fields=['name','order_date','total_price'])
# 		print("______________________________________________________________________________")
# 		print(get_list)
# 		return order