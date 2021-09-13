frappe.pages['order-details'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Order details',
		single_column: true
	});
	page.add_inner_button(__("sam"), function () {
		frappe.throw("Hii!");
	});

	$(frappe.render_template("order details"))
}