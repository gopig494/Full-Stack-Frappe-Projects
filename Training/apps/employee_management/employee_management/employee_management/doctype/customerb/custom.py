from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Custom(Document):
	def on_submit(self):
		frappe.throw("Overide")