import frappe


def vinfo(self, f):
    if self.first_name:
        frappe.msgprint("Hello "+self.first_name)
