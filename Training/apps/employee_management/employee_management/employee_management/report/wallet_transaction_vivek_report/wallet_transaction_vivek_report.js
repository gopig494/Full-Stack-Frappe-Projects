// Copyright (c) 2016, Gopi and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Wallet Transaction Vivek Report"] = {
	"filters": [
	{
		"fieldname": "customer",
	    "label": __("Customer Name"),
	    "fieldtype": "Link",
	    "options": "Wallet Customer Menu",
	    "width": 300
	},
	{
		"fieldname": "payment_type",
	    "label": __("Payment Type"),
	    "fieldtype": "Select",
	    "options": "\nPay\nReceive",
	    "width": 300

	}

	]
};
