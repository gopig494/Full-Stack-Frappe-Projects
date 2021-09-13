frappe.pages['report-view'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Report View',
		single_column: true
	});
	console.log("I Am Page JS")
	// 	frappe.call({
	// 		method: "employee_management.employee_management.page.report_view.report_view.get_wallet",
	// 		async: false,

	// 		callback: function (data) {
	// 			if (data.message) {
	// 				if (data.message.length > 0) {

	// 					$(frappe.render_template("report_view", { payments: data.message })).appendTo(page.body.addClass("no-border"));
	// 				}
	// 			}
	// 		}
	// 	});
	// 	page.add_inner_button(__("New Order"), function () {
	// 		frappe.new_doc('Wallet Transaction')
	// 	})
}










