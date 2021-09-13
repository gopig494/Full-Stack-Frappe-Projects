import frappe


def before_install():
    print("get context ****************************/////////////////////////--------------------------------")
    print("Before Install Working")


def after_install():
    print("get context ****************************/////////////////////////--------------------------------")
    print("After install Working")


def get_context(context):
    pass
    # context.s = frappe.db.get_list('Wallet Transaction', filters={
    # 'docstatus': 1}, fields=['name', 'date', 'customer_name', 'product_price'])


def on_session_creation():
    frappe.msgprint("You Are logged In sucessfully")


def on_logout():
    frappe.msgprint("Your Are Logged Out Sucessfully")
