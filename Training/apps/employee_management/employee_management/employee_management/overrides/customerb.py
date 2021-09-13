
import frappe

from frappe.desk.doctype.customerb.customerb import Customerb
class CustomCustomerb(Customerb):
	def on_submit(self):
		frappe.throw("Overide")