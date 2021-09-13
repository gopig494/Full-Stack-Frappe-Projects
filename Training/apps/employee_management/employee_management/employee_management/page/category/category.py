from __future__ import unicode_literals
import frappe

@frappe.whitelist()

def get_list():
	
	orders = frappe.db.sql('''select name,category_name from `tabCategoryb`''')
	
	return orders

@frappe.whitelist()
def get_insert(name,cname):
	result = frappe.db.set_value('Categoryb',name,'category_name',cname)
	return result

	
	
		
	
