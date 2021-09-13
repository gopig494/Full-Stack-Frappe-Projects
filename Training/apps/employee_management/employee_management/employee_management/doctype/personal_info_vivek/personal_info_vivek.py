# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class PersonalInfoVivek(Document):
	def validate(self):
		if self.first_name and self.last_name and self.age and self.email and self.phone_number:
			frappe.msgprint("Success")
		else:
			frappe.throw("fill the details correctly")
