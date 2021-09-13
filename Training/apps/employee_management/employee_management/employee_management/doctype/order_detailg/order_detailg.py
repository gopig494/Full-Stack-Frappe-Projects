# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document


class OrderDetailG(Document):
    # def before_save(self):
    #     for d in self.get("product_detail"):
    #         if d.product_price:
    #             print("//////////////////************************///////////////////")
    #             print(d.product_price)
    #             frappe.db.set_value(
    #                 "Order DetailG", self.name, "product_price", d.product_price)
    def validate(self):
        total = 0
        for k in self.get("product_detail"):
            total += int(k.product_price)

        # frappe.db.set_value(
           # "Order DetailG", self.name, "total_amount", total)

        self.total_amount = total
        print(
            "////////////////**************--------------------******************////////////////////")
        print(total)
        print(self.name)
