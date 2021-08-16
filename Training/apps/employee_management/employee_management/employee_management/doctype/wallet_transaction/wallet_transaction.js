// // Copyright (c) 2021, Gopi and contributors
// // For license information, please see license.txt

// frappe.ui.form.on('Wallet Transaction', {
// 	// refresh: function(frm) {

// 	// }
// });



frappe.ui.form.on('Wallet Transaction', {
	refresh(frm) {
		if (cur_frm.doc.docstatus == 1) {
			frm.add_custom_button(__('Make Payment'), function () {
				frappe.model.open_mapped_doc({
					method: "employee_management.employee_management.doctype.wallet_transaction.wallet_transaction.make_payment",
					frm: cur_frm
				});
			});
		}
	}
});