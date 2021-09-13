import frappe
def after_install():
	# frappe.get_doc({'doctype': "Role", "role_name": "Analytics"}).insert()
	re = frappe.get_doc("Payments")
	re.customer_name ="Samplename"
	re.insert()