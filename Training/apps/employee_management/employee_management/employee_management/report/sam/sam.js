// Copyright (c) 2016, Gopi and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Sam"] = {
	"filters": [
	{
		"fieldname": "customer",
	    "label": __("Customer Name"),
	    "fieldtype": "Link",
	    "options": "Customer Nameb",
	    "width": 300
	},
	{
		"fieldname": "payment_type",
	    "label": __("Payment Type"),
	    "fieldtype": "Select",
	    "options": "\nPay\nReceive",
	    "width": 300

	}

	],
	// return frappe.db.get_all('User', ['first_name', 'last_name'], filters = filters)
};
