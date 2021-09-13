// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Order Vivek', {
	refresh(frm) {
		// if(cur_frm.doc.docstatus == 0){
		// 	frm.add_custom_button(__('Placed'), function () {
		// 		frappe.msgprint("Please Submit the Order")
		// 	});
		// }
		//make payment start
		
		if (cur_frm.doc.docstatus == 1 && cur_frm.doc.order_status == "Placed") {
			frm.add_custom_button(__('Make Payment'), function () {
				cur_frm.set_value("order_status","In Progress")
				cur_frm.save_or_update()
				var postdata = {
     							'party_name' : cur_frm.doc.customer_name,
    							'payment_date' : cur_frm.doc.date,
    							'paid_amount' : cur_frm.doc.total_amount,
    							'payment_reference' : 
    							[{'type':cur_frm.doctype,'name1':cur_frm.docname,'total_amount':cur_frm.doc.total_amount}]
    						}
				$.ajax({
					headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
					method:'Post',
					url:'http://192.168.0.156:8000/api/resource/Payment Vivek',
					datatype:'JSON',
					data:JSON.stringify(postdata),
					success:function(data){console.log("sucess "+data);},
					error:function(err){},
				});
				if(cur_frm.doc.order_status == "In Progress"){
				// cur_frm.reload_doc()
			}
			});

			
		}
		//make payment end
		if(cur_frm.doc.order_status == "In Progress"){
			frm.add_custom_button(__('Complete'), function () {
				// frappe.db.set_value("Order Vivek",cur_frm.docname,"payment_status","Completed")
				if(cur_frm.doc.payment_status == "Paid"){
						cur_frm.set_value("order_status","Completed")
						cur_frm.save_or_update()
						// if(cur_frm.doc.order_status == "Completed"){
						// 	// cur_frm.reload_doc()
						// }
						console.log("hi")
				}
				else{
					frappe.msgprint("Please Pay the Payment")
				}
			});
			
		}
	}

});

