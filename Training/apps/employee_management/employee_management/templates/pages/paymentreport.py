from __future__ import unicode_literals
import frappe
from frappe.model.document import Document


def get_context(context):
		context.order = frappe.db.get_list('Orders Menu Info',filters={'docstatus':1},
			fields=['name','order_date','total_price'])
		return order