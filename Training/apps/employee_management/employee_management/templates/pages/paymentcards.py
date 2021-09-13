import frappe

def get_context(context):
    context.payments = frappe.db.get_list('Order Menu Info',filters={'docstatus':1}, fields=['name','post_date','customer_name','price','order_item_id','order_item'])
