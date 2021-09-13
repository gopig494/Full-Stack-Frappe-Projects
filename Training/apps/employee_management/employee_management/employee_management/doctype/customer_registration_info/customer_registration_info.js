// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Customer Registration Info', {
	refresh: function(frm) {

		if (cur_frm.doc.status == "Pending") {
			frm.add_custom_button(__('Approved'), function () {
				frappe.db.set_value("Customer Registration Info",cur_frm.docname,"status","Approved")
				frappe.msgprint("Approved Successfully")
				});
			frm.add_custom_button(__('Rejected'), function () {
				frappe.db.set_value("Customer Registration Info",cur_frm.docname,"status","Rejected")
				frapppe.msgprint('Customer Registration Rejected')
				});		
		}


		
	}
});
