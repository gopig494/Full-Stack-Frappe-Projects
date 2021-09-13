# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document


class ProductDetailGG(Document):
    def validate(self):
        self.product_id = self.name
        if self.is_stock_item:
            if self.opening_stock > 1:
                abcd = self.opening_stock*self.valuation_rate
                doc = frappe.get_doc({
                    "doctype": "Stock Entry GG",
                    "stock_date": self.date,
                    "note": self.description,
                    "purpose": "Material Receipt",
                    "docstatus": 1,
                    "detail": [{
                        "product_id": self.product_id,
                        "product_name": self.product_name,
                        "product_price": self.valuation_rate,
                        "product_quantity": self.opening_stock,
                        "total_amount": abcd

                    }]

                })
                doc.insert()
            else:
                frappe.throw("Stock With '0' Value Can't Be Added")
