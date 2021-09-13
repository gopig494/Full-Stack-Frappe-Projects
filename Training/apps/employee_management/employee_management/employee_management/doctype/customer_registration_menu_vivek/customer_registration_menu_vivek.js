// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Customer Registration Menu Vivek', {
	refresh: function(frm) {
		if (cur_frm.doc.status == "Pending") {
			frm.add_custom_button(__('Accept'), function () {
				frappe.db.set_value("Customer Registration Menu Vivek",cur_frm.docname,"status","Approved")
				});
			frm.add_custom_button(__('Reject'), function () {
				frappe.db.set_value("Customer Registration Menu Vivek",cur_frm.docname,"status","Rejected")
				
				});		
		}
	}
});
