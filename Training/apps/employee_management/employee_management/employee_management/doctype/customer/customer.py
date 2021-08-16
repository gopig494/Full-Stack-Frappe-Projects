# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import getdate, add_months, add_to_date, nowdate, today, now


class Customer(Document):
    def validate(self):
        if self.get('__islocal'):
            check_drivers = frappe.db.get_all(
                'User', filters={'name': self.e_mail_id})
            # check_drivers = frappe.db.get_all('Drivers', filters={'driver_email': self.driver_email, 'name': ('!=', self.name)})
            if check_drivers:
                user_role = frappe.db.get_all(
                    'Has Role', filters={'parent': self.e_mail_id, 'role': 'Cusleader'})
                if not user_role:
                    add_arole(self, 'Cusleader')
                else:
                    frappe.throw(frappe._('E-Mail ID already registered.'))

            else:
                print("_______________________________________________________________")
                insert_user(self, self.assign_role)
                # frappe.throw(frappe._('E-Mail is valid.'))

            # frappe.throw(frappe._('E-Mail ID already registered.'))
        if self.mobile_number:
            self.validate_phone()
        if self.password:
            # print(self.get_password(fieldname='password'))
            self.cus_password()

    def validate_phone(self):
        import re
        res = re.search('(?=.*\d)[\d]', str(self.mobile_number))
        if not res:
            frappe.throw(frappe._('Phone number must contain only numbers'))
        sto = frappe.get_single('Customer Setting')
        # print("-----------------------------------------------")
        # print(customer_settings)
        # frappe.throw(frappe._(customer_settings))
        if sto.validate_number:
            # frappe.throw(frappe._("sucess"))
            if len(str(self.mobile_number)) != int(sto.max_len):
                frappe.throw(
                    frappe._('Phone Number must contain {0} digits').format(sto.max_len))

    def cus_password(self):
        cus_pass = frappe.get_single('Customer Setting')
        if cus_pass.validate_password:
            if len(self.password) >= int(cus_pass.min_leng) and len(self.password) <= int(cus_pass.max_leng):
                pass
            else:
                frappe.throw(
                    frappe._('Password must contain {0} digits').format(cus_pass.max_leng))


@ frappe.whitelist()
def add_arole(self, role):
    user_role = frappe.db.get_all(
        'Has Role', filters={'parent': self.e_mail_id, 'role': role})
    if not user_role:
        result = frappe.get_doc({
            "doctype": "Has Role",
            "name": nowdate(),
            "parent": self.e_mail_id,
            "parentfield": "roles",
            "parenttype": "User",
            "role": role
        }).insert()


@frappe.whitelist(allow_guest=True)
def insert_user(self, role):
    a = role
    result = frappe.get_doc({
        "doctype": "User",
        "email": self.e_mail_id,
        "first_name": self.name1,
        "mobile_no": self.mobile_number,
        "send_welcome_email": 0}).insert(ignore_permissions=True)

    add_arole(self, a)

    frappe.msgprint(frappe._(a + ' role assign to.' + self.email))

    return result
