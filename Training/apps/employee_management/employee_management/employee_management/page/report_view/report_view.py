import frappe


# @frappe.whitelist()
# # def get_wallet():
# #     s = frappe.db.get_list('Wallet Transaction', filters={
# #         'docstatus': 1}, fields=['name', 'date', 'customer_name', 'product_price'])
# #     return s
def get_context(context):
    print("****************************/////////////////////////--------------------------------")
    context.s = frappe.db.get_list('Wallet Transaction', filters={
        'docstatus': 1}, fields=['name', 'date', 'customer_name', 'product_price'])
