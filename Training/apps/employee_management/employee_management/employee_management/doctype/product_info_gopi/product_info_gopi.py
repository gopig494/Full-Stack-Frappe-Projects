# -*- coding: utf-8 -*-
# Copyright (c) 2021, Gopi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document


class ProductInfoGopi(Document):
    pass

    # def validate(self):
    #  get_record(self)

    # def validate(self):
    #     # insert_record(self)
    #     doc = frappe.db.get_list("Product Variant Gopi")
    #     for k in doc:
    #         print("******///////////*/***/**/**/**/////////////*/*/*/*/*/*/****",
    #               k.product_attribute)
    #         print("/*/*/***/******/*/*/*/*/*/**********************************************************************")

    # @frappe.whitelist(allow_guest=True)
    # def insert_record(self):
    #     doc = frappe.get_doc("Product Variant Gopi")
    #     print("******///////////*/***/**/**/**/////////////*/*/*/*/*/*/****", doc.items)


@frappe.whitelist(allow_guest=True)
def get_record(idd):
    print("///////////*******************///////////////////////*******")
    print(idd)
    result = frappe.db.sql(
        '''select * from  `tabProduct Variant Gopi` r where r.parent=%(pid)s''', {"pid": idd}, as_dict=1)
    for i in result:
        print(i.product_attribute)

    return result


@frappe.whitelist(allow_guest=True)
def del_record(idd):
    doc = frappe.get_doc({
        'doctype': 'Product Variant Gopi',
        'name': idd
    })
    doc.delete()
    return doc
