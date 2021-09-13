// Copyright (c) 2016, Gopi and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Wallet Transaction Info Report"] = {
	"filters": [
		{
			"fieldname":"customer",
			"label": __("Customer"),
			"fieldtype": "Link",
			"options":"Wallet Entry Info",
			"width":300
		},
		{
			"fieldname":"payment_type",
			"label":__("Payment Type"),
			"fieldtype":"Select",
			"options":"\nPay\nReceive"			
		},
		{
			"fieldname":"amount",
			"label":__("Amount"),
			"fieldtype":"Currency",
			// "options":"\nPending\nPaid\nCancelled"			
		},
		{
			"fieldname":"date_time",
			"label":__("Date Time"),
			"fieldtype":"Datetime",
			// "options":"\nWebsite\nAndroid Mobile App\nIOS Mobile App\nPOS"			
		}	
	]
	
};
