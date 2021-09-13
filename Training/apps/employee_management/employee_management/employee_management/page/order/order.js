frappe.pages['order'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Order details',
		single_column: true
	});
	frappe.call({
		method: "employee_management.employee_management.page.order.order.get_list",
		async: false,

		callback: function (data) {
			if (data.message) {
				if (data.message.length > 0) {

					$(frappe.render_template("order", { payments: data.message })).appendTo(page.body.addClass("no-border"));
				}
			}
		}
	});
	page.add_inner_button(__("New Order"), function () {
		frappe.new_doc('Orderss')
	});



	// $(frappe.render_template("order")).appendTo(page.body.addClass("no-border"));
}