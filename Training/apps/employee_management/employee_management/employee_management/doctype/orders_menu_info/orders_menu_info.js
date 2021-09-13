// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Orders Menu Info', {
	refresh: function(frm) {


        $.ajax({
            headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
            method:'GET',
            url:'http://192.168.0.156:8000/api/resource/Orders Menu Info',
        
        success:function(data){console.log("Hiiiiiiiiiiiiiiiii");},
        error:function(err){console.log(err);},
});

        //Api Post Data
            var post_data = {
                       "customer_name":"BAaaaaaaa",
                        "product_id":"1214",
                        "product_name":"Wallet",
                        "total_price":"4000",
                         "order_date":"2021-08-26" ,
                        }       
        $.ajax({
            headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
            method:'POST',
            url:'http://192.168.0.156:8000/api/resource/Orders Menu Info',
            dataType: 'json',
            data:JSON.stringify(post_data),
        
        success:function(data){console.log("sucess insert"+data);},
        error:function(err){console.log(err);},
        });
        var put_data = {
                       "customer_name":"BAaaaaaaa",
                        "product_id":"1215",
                        "product_name":"Wallets",
                        "total_price":40045,
                         "order_date":"2021-08-26" ,
                        }     
        $.ajax({
            headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
            method:'PUT',
            url:'http://192.168.0.156:8000/api/resource/Orders Menu Info/BAaaaaaaa',
            dataType: 'json',
            data:JSON.stringify(put_data),
        
        success:function(data){console.log("sucess put"+data)},
        error:function(err){console.log(err);},
        });x
        $.ajax({
            headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
            method:'Delete',
            url:'http://192.168.0.156:8000/api/resource/Orders Menu Info/sdatgearg',
        
        success:function(data){console.log("sucess delete"+data);},
        error:function(err){console.log(err);},
        });
  

		if (cur_frm.doc.docstatus == 1 && cur_frm.doc.outstanding_amt !=0){
			frm.add_custom_button(__('Make Payment'), function(){
				frappe.model.open_mapped_doc({
					method: "employee_management.employee_management.doctype.orders_menu_info.orders_menu_info.make_payment",
					frm: cur_frm
                });
			
		    });
        }

        $(cur_frm.fields_dict['payment_details'].wrapper).html(frappe.render_template("order", { payments: "", button_enable: 0, orders_menu_info: cur_frm.doc.name }));
        frappe.call({
                method: 'employee_management.employee_management.doctype.orders_menu_info.orders_menu_info.get_order_payment',
                args: {
                    'orders': cur_frm.doc.name
                },

                async: false,
                callback: function(data) {

                    if (data.message) {
                      
                        if (data.message.length > 0) {
                            $(cur_frm.fields_dict['payment_details'].wrapper).html(frappe.render_template("order", { payments: data.message, button_enable: 0, orders_menu_info: cur_frm.doc.name }));
                        }
                    }
                }
            });
       
	},

	show_payment_details:function(frm){
       let d = new frappe.ui.Dialog({
           title:"Payment details",
           fields:[
           {
               label:"Payment Detail",
               fieldname:"payment_details",
               fieldtype:"HTML"
           }
           ]
       })
       $(d.fields_dict['payment_details'].wrapper).html(frappe.render_template("order", { payments: "", button_enable: 0, orders_menu_info: cur_frm.doc.name }));
       frappe.call({
                method: 'employee_management.employee_management.doctype.orders_menu_info.orders_menu_info.get_order_payment',
                args: {
                    'orders': cur_frm.doc.name
                },

                async: false,
                callback: function(data) {

                    if (data.message) {
                        if (data.message.length > 0) {
                            $(d.fields_dict['payment_details'].wrapper).html(frappe.render_template("order", { payments: data.message, button_enable: 0, orders_menu_info: cur_frm.doc.name }));
                        }
                    }
                }
            });
       d.show();
   }


});

frappe.ui.form.on('Payment Report Info', {
   form_render(frm, cdt, cdn){
       console.log("form_render") 
       $(cur_frm.fields_dict["payment_reports"].grid.grid_rows_by_docname[cdn].grid_form.fields_dict['payment_report'].wrapper).html(frappe.render_template("order", { payments: "", button_enable: 0, orders_menu_info: cur_frm.doc.name}));
        frappe.call({
                method:'employee_management.employee_management.doctype.orders_menu_info.orders_menu_info.get_order_payment',
                args: {
                    'orders': cur_frm.doc.name
                },
                async: false,
                callback: function(data) {
                    if (data.message) {
                        if (data.message.length > 0) {
                            $(cur_frm.fields_dict["payment_reports"].grid.grid_rows_by_docname[cdn].grid_form.fields_dict['payment_report'].wrapper).html(frappe.render_template("order", { payments: data.message, button_enable: 0, orders_menu_info: cur_frm.doc.name}));
                        }
                    }
                }
            });
       }
});


frappe.ui.form.on("Payment Report Info", "form_render", function(frm, cdt, cdn) {
        var i = locals[cdt][cdn]
        frappe.call({
        method:'employee_management.employee_management.doctype.orders_menu_info.orders_menu_info.get_order_payment',
        args: {'orders': cur_frm.doc.name},
        async: false,
        callback: function(data) {
        if (data.message) {
        if (data.message.length > 0) {

        let wrapper = frm.fields_dict["payment_reports"].grid.grid_rows_by_docname[cdn].grid_form.fields_dict['payment_report'].wrapper
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
        </table>`).appendTo(wrapper);

        let rec = data.message
           console.log(rec);
        rec.forEach(function(i){          
                let payment_id = i.name;
                let payment_date = i.posting_date;
                let total_amount = i.total_amount;
                let paid_amount = i.paid_amount;
                let outstanding_amt = i.outstanding_amt;
                let row = $(`<tr>
                        <td><a href="#Form/Payments/${__(payment_id)}">${__(payment_id)}</a></td>
                        <td>${__(payment_date)}</td>
                        <td>${__(total_amount)}</td>
                        <td>${__(paid_amount)}</td>
                        <td>${__(outstanding_amt)}</td>
                    </tr>`);
                table_html.find('tbody').append(row);
       })
        }
       }
      }
   });
       
});