// // Copyright (c) 2021, Gopi and contributors
// // For license information, please see license.txt

// frappe.ui.form.on('Wallet Transaction', {
// 	// refresh: function(frm) {

// 	// }
// });


// frappe.ui.form.on('Wallet Transaction', {
// 	refresh(frm) {
// 		if (cur_frm.doc.docstatus == 1) {
// 			frm.add_custom_button(__('Make Payment'), function () {
// 				frappe.model.open_mapped_doc({
// 					method: "employee_management.employee_management.doctype.wallet_transaction.wallet_transaction.make_payment",
// 					frm: cur_frm
// 				});
// 			});
// 		}
// 	}
// });




frappe.ui.form.on('Wallet Transaction', {
	refresh: function (frm) {
		frappe.call({
			method: 'employee_management.employee_management.doctype.wallet_transaction.wallet_transaction.get_child',
			args: {
				'wallet_transaction': cur_frm.doc.name
			},

			async: false,
			callback: function (data) {
				console.log(data);
			}


		});

	},
	customer_name: function (frm) {
		var r = frm.add_child("reference_child", {
			data: frappe.datetime.get_today(),
		})
		frm.refresh_field("reference_child")

	},

	// refresh(frm) {
	// 	if (cur_frm.doc.docstatus == 1) {
	// 		frm.add_custom_button(__('Make Payment'), function () {
	// 			frappe.model.open_mapped_doc({
	// 				method: "employee_management.employee_management.doctype.wallet_transaction.wallet_transaction.make_payment",
	// 				frm: cur_frm
	// 			});
	// 		});
	// 	}
	// },
	prompt: function (frm) {
		let d = new frappe.ui.Dialog({
			title: "Payment History",
			fields: [
				{
					label: "Payment Detail",
					fieldname: "payment_detail",
					fieldtype: "HTML"
				}
			]
		})
		$(frm.fields_dict['payment_detail'].wrapper).html(frappe.render_template("index", { payments: "", button_enable: 0, idd: frm.doc.name }));

		frappe.call({
			method: 'employee_management.employee_management.doctype.wallet_transaction.wallet_transaction.value_get',
			args: {
				'idd': frm.doc.name
			},

			async: false,
			callback: function (data) {

				if (data.message) {
					if (data.message.length > 0) {
						$(frm.fields_dict['payment_detail'].wrapper).html(frappe.render_template("index", { payments: data.message, button_enable: 0, idd: frm.doc.name }));
					}

				}
			}
		})
	}
});


// frappe.ui.form.on('Reference Child', {

// 	form_render(frm, cdt, cdn) {
// 		$(cur_frm.fields_dict["reference_child"].grid.grid_rows_by_docname[cdn].grid_form.fields_dict['payment_detail'].wrapper).html(frappe.render_template("index", { payments: "", button_enable: 0, idd: frm.doc.name }));

// 		frappe.call({
// 			method: 'employee_management.employee_management.doctype.wallet_transaction.wallet_transaction.value_get',
// 			args: {
// 				'idd': frm.doc.name
// 			},

// 			async: false,
// 			callback: function (data) {

// 				if (data.message) {
// 					if (data.message.length > 0) {
// 						$(cur_frm.fields_dict["reference_child"].grid.grid_rows_by_docname[cdn].grid_form.fields_dict['payment_detail'].wrapper).html(frappe.render_template("index", { payments: data.message, button_enable: 0, idd: frm.doc.name }));
// 					}

// 				}
// 			}
// 		})
// 	}
// });





frappe.ui.form.on("Reference Child", "form_render", function (frm, cdt, cdn) {
	frappe.call({
		method: 'employee_management.employee_management.doctype.wallet_transaction.wallet_transaction.value_get',
		args: { 'idd': cur_frm.doc.name },
		async: false,
		callback: function (data) {
			if (data.message) {
				if (data.message.length > 0) {

					let wr = frm.fields_dict["reference_child"].grid.grid_rows_by_docname[cdn].grid_form.fields_dict['payment_detail'].wrapper
					let table_html = $(`<table class="table table-bordered">
	<!-- <marquee style="background-color: lightgreen;color: black;"><b>Payment Details</b></marquee> -->
	<thead style="background-color: #e5e9eb;">
	<th>Payment ID</th>
	<th>Payment Date</th>
	 <th>Total Amount</th>
	<th>Paid Amount</th>
	<th>Outstanding Amount</th>
   
	</thead>
	<tbody>
	</tbody>
	</table>`).appendTo(wr);

					let res = data.message
					res.forEach(function (m) {
						let payment_id = m.name;
						let payment_date = m.posting_date;
						let total_amount = m.total_amount;
						let paid_amount = m.paid_amount;
						let outstanding = m.outstanding;
						let row = $(`<tr>
						<td>${__(payment_id)}</td>
					<td>${__(payment_date)}</td>
					<td>${__(total_amount)}</td>
					<td>${__(paid_amount)}</td>
					<td>${__(outstanding)}</td>
				</tr>`);
						table_html.find('tbody').append(row);
					})
				}
			}
		}
	});

});





















// frappe.ui.form.on('Wallet Transaction', {
// 	refresh(frm) {
// 		if (cur_frm.doc.docstatus == 1) {
// 			frm.add_custom_button(__('Make Payment'), function () {
// 				frappe.model.open_mapped_doc({
// 					method: "employee_management.employee_management.doctype.wallet_transaction.wallet_transaction.make_payment",
// 					frm: cur_frm
// 				});
// 			});
// 		}

// 		new frappe.ui.Dialog({
// 			title: "Payment History",
// 			fields: [
// 				{
// 					label: "Payment Detail",
// 					fieldname: "payment_detail",
// 					fieldtype: "HTML"
// 				}
// 			]
// 		})
// 		$(frm.fields_dict['payment_detail'].wrapper).html(frappe.render_template("index", { payments: "", button_enable: 0, idd: frm.doc.name }));

// 		frappe.call({
// 			method: 'employee_management.employee_management.doctype.wallet_transaction.wallet_transaction.value_get',
// 			args: {
// 				'idd': frm.doc.name
// 			},

// 			async: false,
// 			callback: function (data) {

// 				if (data.message) {
// 					if (data.message.length > 0) {
// 						$(frm.fields_dict['payment_detail'].wrapper).html(frappe.render_template("index", { payments: data.message, button_enable: 0, idd: frm.doc.name }));
// 					}

// 				}
// 			}
// 		})

// 		// d.show()
// 	}
// });




