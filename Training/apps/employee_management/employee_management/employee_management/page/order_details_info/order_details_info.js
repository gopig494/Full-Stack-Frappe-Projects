frappe.pages['order-details-info'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'None',
		single_column: true
	});
	page.set_title('order details info')
	// page.set_title_sub('Subtitle')
	page.set_indicator('Pending', 'orange')
	page.clear_indicator()
	page.clear_primary_action()
	let $btn = page.set_secondary_action('Refresh', () => refresh(), 'octicon octicon-sync')
	// page.clear_secondary_action()
	// add a normal menu item
	page.add_menu_item('Send Email', () => open_email_dialog())

	// add a standard menu item
	page.add_menu_item('Send Email', () => open_email_dialog(), true)

	// frappe.call({
	// 	method: "employee_management.employee_management.page.order_details_info.order_details_info.get_payment",
	// 	callback: function (data) {
	// 		if (data.message) {
	// 				$(frappe.render_template("order_details_info", { payments: data.message })).appendTo(page.body.addClass("no-border"));
	// 		}
	// 	}
	// });

}
