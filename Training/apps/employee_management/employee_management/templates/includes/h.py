@frappe.whitelist(allow_guest=True)
def holdOrder(data):
	try:
		doc = data
		if isinstance(doc, string_types):
			doc = json.loads(doc)
		if doc.get('hold_Id'):
			cart = frappe.get_doc('Shopping Cart', doc.get('hold_Id'))
		else:
			cart = frappe.new_doc('Shopping Cart')
		cart.cart_type = 'Pos Cart'
		cart.customer = doc.get('cus_id')
		cart.customer_name = doc.get('cus_name')
		cart.tax = doc.get('tax')
		cart.total = doc.get('amount')
		for x in doc.get('items'):
			cart.append('items', {
				'product': x.get('item'),
				'quantity': x.get('quantity'),
				'price': x.get('price'),
				'total': x.get('item_total'),
				'tax': x.get('tax'),
				'attribute_description': x.get('attribute_description'),
				'attribute_ids': x.get('attribute_ids'),
				'special_instruction': x.get('special_instruction'),
				})
		cart.save(ignore_permissions=True)
		return cart.__dict__
	except Exception as e:
		frappe.log_error(frappe.get_traceback(), 'ecommerce_business_store.ecommerce_business_store.api.holdOrder')
