from __future__ import unicode_literals
import frappe


@frappe.whitelist()
def get_list():

    orders = frappe.db.get_list('Orderss', filters={'docstatus': 1}, fields=[
                                'name', 'creation', 'total'])
    return orders
