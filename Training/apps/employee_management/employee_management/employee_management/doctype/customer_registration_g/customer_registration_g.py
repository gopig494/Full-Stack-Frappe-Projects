# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document


class CustomerRegistrationG(Document):
    def on_update(self):
        if self.status == "Approved":
            doc = frappe.get_doc({
                'doctype': 'Customer File G',
                'first_name': self.first_name,
                'last_name': self.last_name,
                'email': self.email,
                'phone_number': self.phone_number,
                'password': self.password
            })
            doc.insert()
            frappe.db.set_value("Customer Registration G",
                                self.name, "reference_id", doc.name)


@frappe.whitelist()
def info_insert(fname, lname, mnumber, email, password, gender):

    m = frappe.db.exists('Customer Registration G', {'email': email})
    p = frappe.db.exists('Customer Registration G', {'phone_number': mnumber})
    n = frappe.db.exists('Customer File G', {'phone_number': mnumber})
    k = frappe.db.exists('Customer File G', {'email': email})

    if m or p or n or k:
        return "User Mobile number/Mail Id Already Registered"
    else:
        reg = frappe.new_doc("Customer Registration G")

        reg.first_name = fname
        reg.last_name = lname
        reg.email = email
        reg.phone_number = mnumber
        reg.password = password
        reg.gen = gender
        reg.insert()

        return "Submitted Successfully"
