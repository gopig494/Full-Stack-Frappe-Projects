// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Orders Module Info', {
	refresh: function(frm) {

   if (cur_frm.doc.docstatus == 1 && cur_frm.doc.order_status == "Placed"){
		{
			frm.add_custom_button(__('Make Payment'), function(){
				frappe.msgprint("Successfully Paid")
				var post_data = {
                       "payment_date":"2021-08-26",
                       "party_name":cur_frm.doc.customer_name,
                        "total_price":cur_frm.doc.total_amount,
                        "paid_amount" : cur_frm.doc.total_amount,
                        "order_information":[{
                        	"type":cur_frm.doctype,
                      		"name1":cur_frm.docname,
							"total_amount":cur_frm.doc.total_amount,
                    }],
                        }       
		
        $.ajax({
            headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
            method:'POST',
            url:'http://192.168.0.156:8000/api/resource/Payment Module Inf',
            dataType: 'json',
            data:JSON.stringify(post_data),
        
        success:function(data){console.log("sucess insert"+data);},
        error:function(err){console.log(err);},
        });
		    });

        }
            }
        if(cur_frm.doc.order_status == "In Progress"){
            frm.add_custom_button(__('Complete'), function () {
     
                cur_frm.set_value("order_status","Completed")
                cur_frm.save_or_update()
			});
		}

    }
	
});
