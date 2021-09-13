import frappe


def writed(self, f):
    print("/*****/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*//////////**********")
    if self.des.isnumeric():
        frappe.throw("You Enterted Wrong Detail")
    else:
        frappe.msgprint("Your Detail Successfully Saved")


@frappe.whitelist(allow_guest=True)
def white(idd):
    doc = frappe.get_doc({
        'doctype': 'Product Variant Gopi',
        'name': idd
    })
    doc.delete()
    frappe.msgprint("Whitelist Over Ride Method")
    return doc
