from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
import json
from frappe.utils import flt, comma_or, nowdate, getdate


def get_list(self):
    m = frappe.db.get_list('Orderss')
