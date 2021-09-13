// Copyright (c) 2016, Gopi and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Wallet Transaction G Report"] = {
	"filters": [
		{
			"fieldname": "customer_name",
			"label": __("Customer Name"),
			"fieldtype": "Link",
			"options": "Wallet Entry G",
		},
		{
			"fieldname": "payment_type",
			"label": __("Payment Type"),
			"fieldtype": "Select",
			"options": "\nPay\nReceive"
		},
		{
			"fieldname": "amount",
			"label": __("Amount"),
			"fieldtype": "Currency",
		}
	],
	// "onload": function () {
	// 	var order_from_filter = frappe.query_report.get_filter('order_from');
	// 	if (!frappe.boot.active_domains.includes(frappe.boot.sysdefaults.domain_constants.restaurant)) {
	// 		order_from_filter.df.hidden = 1;
	// 		order_from_filter.refresh();
	// 	}
	// 	// $('.dt-footer .dt-cell--col-12').hide();
	// }
}
// frappe.datetime.add_months(frappe.datetime.get_today(),-1)