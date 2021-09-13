# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.website.website_generator import WebsiteGenerator


class WebView(WebsiteGenerator):
    def validate(self):
        if self.totalroute_enable:
            self.make_route()

    def make_route(self):
        self.route = self.scrub(self.name1)

    # def validate(self):
    #     if self.product_price:
    #         self.total = self.product_price
    #     if self.route:
    #         self.make_route()

    # def make_route(self):
    #     if not self.route:
    #         self.route = self.scrub(self.product_name)
