// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Order DetailG', {
// 	refresh(frm) {
// 		if (cur_frm.doc.delivery_address) {
// 			frm.add_custom_button(__('Make Payment'), function () {


// 				let cal = parseInt((500 / 100) * 18)

// 				var post_data = {
// 					"payment_type": "Pay",
// 					"mode_of_payment": "Cash",
// 					"posting_date": "2021-08-26",
// 					"payment_status": "Paid",
// 					"payment_references": [{
// 						"type": "Payment DetailG",
// 						"type1": "ProductG",
// 						"name1": "PR001",
// 						"product_price": 500,
// 						"allocated": cal,
// 						"total_amount": 500 + cal
// 					}]

// 				};
// 				$.ajax({
// 					headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
// 					method: 'POST',
// 					url: 'http://192.168.0.156:8000/api/resource/Payment EntryG',
// 					dataType: 'json',
// 					data: JSON.stringify(post_data),

// 					success: function (data) { console.log("sucess insert" + data); },
// 					error: function (err) { console.log(err); },
// 				});
// 			});
// 		}
// 	}
// });








// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Order DetailG', {
// 	refresh(frm) {
// 		if (cur_frm.doc.docstatus == 1) {
// 			frm.add_custom_button(__('Make Payment'), function () {

// 				var k = cur_frm.doc.product_detail
// 				k.forEach(function (g) {


// 					console.log(g);
// 					// console.log(g.product_price);
// 					let price = parseInt((g.product_price) / 100) * 18
// 					let total = price + g.product_price

// 					var post_data = {
// 						"payment_type": "Pay",
// 						"mode_of_payment": "Cash",
// 						"posting_date": "2021-08-26",
// 						"payment_status": "Paid",
// 						"payment_references": [{
// 							"type": "Payment DetailG",
// 							"type1": "ProductG",
// 							"name1": g.product,
// 							"product_price": g.product_price,
// 							"allocated": price,
// 							"total_amount": total
// 						}]

// 					};
// 					$.ajax({
// 						headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
// 						method: 'POST',
// 						url: 'http://192.168.0.156:8000/api/resource/Payment EntryG',
// 						dataType: 'json',
// 						data: JSON.stringify(post_data),

// 						success: function (data) { console.log("sucess insert" + data); },
// 						error: function (err) { console.log(err); },
// 					});

// 				});

frappe.ui.form.on('Order DetailG', {
	refresh(frm) {
		if (cur_frm.doc.docstatus == 1 && cur_frm.doc.payment_status == "Unpaid") {
			frm.add_custom_button(__('Make Payment'), function () {

				frappe.msgprint("Paid Successfully")
				frm.set_value('order_status', 'In Progress')
				cur_frm.save_or_update()

				var k = cur_frm.doc.total_amount
				let price = parseInt((k) / 100) * 18
				let total = price + k
				// cur_frm.doc.payment_status = "Paid"
				frm.set_value('payment_status', 'Paid')
				cur_frm.save_or_update()
				var post_data = {
					"payment_type": "Pay",
					"mode_of_payment": "Cash",
					"posting_date": "2021-08-26",
					"payment_status": "Paid",
					"docstatus": 1,
					"payment_references": [{
						"type": "Payment DetailG",
						"type1": "Order DetailG",
						"name1": cur_frm.doc.name,
						"product_price": cur_frm.doc.total_amount,
						"allocated": price,
						"total_amount": total
					}]

				};
				$.ajax({
					headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
					method: 'POST',
					url: 'http://192.168.0.156:8000/api/resource/Payment EntryG',
					dataType: 'json',
					data: JSON.stringify(post_data),

					success: function (data) { console.log("sucess insert" + data); },
					error: function (err) { console.log(err); },
				});



				// var post_data = {
				// 	"payment_type": "Pay",
				// 	"mode_of_payment": "Cash",
				// 	"posting_date": "2021-08-26",
				// 	"payment_status": "Paid",
				// 	"payment_references": [{
				// 		"type": "Payment DetailG",
				// 		"type1": "ProductG",
				// 		"name1": "PR001",
				// 		"product_price": 100,
				// 		"allocated": 200,
				// 		"total_amount": 300
				// 	}]

				// };
				// $.ajax({
				// 	headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
				// 	method: 'POST',
				// 	url: 'http://192.168.0.156:8000/api/resource/Payment EntryG',
				// 	dataType: 'json',
				// 	data: JSON.stringify(post_data),

				// 	success: function (data) { console.log("sucess insert" + data); },
				// 	error: function (err) { console.log(err); },
				// });


			});
		}
		// if (cur_frm.doc.docstatus == 0) {
		// 	frm.add_custom_button(__('Order Placed'), function () {
		// 		console.log("Abcd")
		// 	})

		// }
		// if (cur_frm.doc.docstatus == 1) {
		// 	frm.set_value('order_status', 'In Progress')
		// 	cur_frm.save_or_update()
		// }


		if (cur_frm.doc.docstatus == 1 && cur_frm.doc.payment_status == 'Paid') {

			frm.add_custom_button(__('Complete'), function () {

				frm.set_value('order_status', 'Completed')
				cur_frm.save_or_update()
			})

		}

	}
});
