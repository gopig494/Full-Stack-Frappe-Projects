# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document


class ProductDatatable(Document):
    def validate(self):
        self.id = self.name


@frappe.whitelist(allow_guest=True)
def get_product(dtype):
    product = frappe.db.sql(
        '''select id,product,sku,price,old_price,stock,active,featured_product from `tabProduct Datatable`''')
    return product


@frappe.whitelist(allow_guest=True)
def update_product(name, title, sku, price, oldprice, stock, active, featureproduct):
    print("call sucess", name, title, sku)
    frappe.db.set_value("Product Datatable",name,"product", title)
    frappe.db.set_value("Product Datatable",name,"sku", sku)
    frappe.db.set_value("Product Datatable",name,"price", price)
    frappe.db.set_value("Product Datatable",name,"old_price", oldprice)
    frappe.db.set_value("Product Datatable",name,"stock", stock)
    frappe.db.set_value("Product Datatable",name,"active", active)
    frappe.db.set_value("Product Datatable",name,"featured_product", featureproduct)