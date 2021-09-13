# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document


class ShowDetail(Document):
    def validate(self):
        self.id = self.name


@frappe.whitelist(allow_guest=True)
def get_product():
    product = frappe.db.sql(
        '''select id,product,sku,price,old_price,stock,active,featured_product,categories,image,inventory_method from `tabShow Detail`''')
    return product


@frappe.whitelist(allow_guest=True)
def update_product(name, title, sku, price, oldprice, stock, active, featureproduct, cat, img, inn):
    print("call sucess", name, title, sku)
    frappe.db.set_value("Show Detail", name, "product", title)
    frappe.db.set_value("Show Detail", name, "sku", sku)
    frappe.db.set_value("Show Detail", name, "price", price)
    frappe.db.set_value("Show Detail", name, "old_price", oldprice)
    frappe.db.set_value("Show Detail", name, "stock", stock)
    frappe.db.set_value("Show Detail", name, "active", active)
    frappe.db.set_value("Show Detail", name,
                        "featured_product", featureproduct)
    frappe.db.set_value("Show Detail", name,
                        "categories", cat)
    frappe.db.set_value("Show Detail", name,
                        "image", img)
    frappe.db.set_value("Show Detail", name,
                        "inventory_method", inn)
