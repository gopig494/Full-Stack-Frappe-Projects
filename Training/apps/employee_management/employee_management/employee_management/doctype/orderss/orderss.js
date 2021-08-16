// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Orderss', {
	 refresh: function(frm) {
	 	$(frm.fields_dict['customer'].wrapper).html(frappe.render_template("customer", { payments: "", button_enable: 0, orderss: frm.doc.name }));
            frappe.call({
                method: 'employee_management.employee_management.doctype.orderss.orderss.get_payments',
                args: {
                    'orderss': frm.doc.name
                },
                async: false,
                callback: function(data) {

                    if (data.message) {
                        if (data.message.length > 0) {
                            $(frm.fields_dict['customer'].wrapper).html(frappe.render_template("customer", { payments: data.message, button_enable: 0, orderss: frm.doc.name }));
                        }
                        // else{
                        //     $(frm.fields_dict['expense_html'].wrapper).html(frappe.render_template("expense_list", { payments: data.message,button_enable:1,order:frm.doc.name}));
                        // }
                    }
                }
            });


		
    }
	

 
});
//if (cur_frm.doc.docstatus == 1){
			//frm.add_custom_button(__('Make Payment'), function(){
				//frappe.model.open_mapped_doc({
					//method: "employee_management.employee_management.doctype.orderss.orderss.new_entry",
					//frm: cur_frm
                //});
			
		    //});
		
        //}