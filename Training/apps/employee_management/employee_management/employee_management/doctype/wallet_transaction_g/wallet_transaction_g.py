# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document


class WalletTransactionG(Document):
    def on_submit(self):
        payment(self)

    def on_cancel(self):
        cancel(self)


@frappe.whitelist(allow_guest=True)
def payment(self):
    product = frappe.db.get_value(
        'Wallet Entry G', self.customer_name, "current_wallet_amount")
    if self.payment_type == "Pay":
        cus_amount = self.amount+product
        frappe.db.set_value("Wallet Entry G", self.customer_name,
                            "current_wallet_amount", cus_amount)
    if self.payment_type == "Receive":
        if self.amount < product:
            cus_amount = product-self.amount
            frappe.db.set_value("Wallet Entry G", self.customer_name,
                                "current_wallet_amount", cus_amount)
        else:
            frappe.throw(
                "You Entered Amount Is Grater Than Wallet Amount")


@frappe.whitelist(allow_guest=True)
def cancel(self):
    product = frappe.db.get_value(
        'Wallet Entry G', self.customer_name, "current_wallet_amount")
    if self.payment_type == "Pay":
        if self.amount < product:
            cus_amount = product-self.amount
            frappe.db.set_value("Wallet Entry G", self.customer_name,
                                "current_wallet_amount", cus_amount)
        else:
            frappe.throw(
                "You Entered Amount Is Grater Than Wallet Amount")

    if self.payment_type == "Receive":
        cus_amount = product+self.amount
        frappe.db.set_value("Wallet Entry G", self.customer_name,
                            "current_wallet_amount", cus_amount)
