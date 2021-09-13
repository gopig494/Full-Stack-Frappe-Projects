// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Customer Registration G', {
	refresh: function (frm) {
		if (cur_frm.doc.status == "Pending") {
			frm.add_custom_button(__('Accept'), function () {
				frappe.db.set_value("Customer Registration G", cur_frm.docname, "status", "Approved")
			});
			frm.add_custom_button(__('Reject'), function () {
				frappe.db.set_value("Customer Registration G", cur_frm.docname, "status", "Rejected")

			});
		}
	}
});
