// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Product Assesment Test', {
	refresh: function(frm) {
		var record = frappe.get_doc("Product Assesment Test",cur_frm.doc.name)
		// console.log(display.product_variants," testttttt");
		$(cur_frm.fields_dict['display_table'].wrapper).html(frappe.render_template("report", { display: record.product_variants}));
		
	},
	add_new_details:function(frm){
		let d = new frappe.ui.Dialog({
    		title: 'Enter details',
    		fields: [{
           			 	label: 'Product Attribute',
            			fieldname: 'product_attribute',
            			fieldtype: 'Data'
        			},
        			{
            			label: 'Is Required',
			            fieldname: 'is_required',
			            fieldtype: 'Select',
            			options: [
				        			'Yes',
				        			'No'
				    			]
        			},
			        {
			            label: 'Control Type',
			            fieldname: 'control_type',
			            fieldtype: 'Data'
			        },
			        {
			            label: 'Display Order',
			            fieldname: 'display_order',
			            fieldtype: 'Int'
			        },
			        {
			            label: 'Size Chart',
			            fieldname: 'size_chart',
			            fieldtype: 'Data'
			        }
    				],
    		primary_action_label: 'Submit',
    		primary_action(values) {
       //  		cur_frm.set_value({"product_variants":[{"product_attribute":values.product_attribute,
							// 	    "is_required":values.is_required,
							// 		"control_type":values.control_type,
							// 		"display_order":values.display_order,
							// 		"size_chart":values.size_chart
							// 	}]
							// })
					if(cur_frm.doc.product_variants){
        			cur_frm.doc.product_variants.push({
        			"product_attribute":values.product_attribute,
					"is_required":values.is_required,
					"control_type":values.control_type,
					"display_order":values.display_order,
					"size_chart":values.size_chart
					})
        		}else{
        			cur_frm.set_value({"product_variants":[{"product_attribute":values.product_attribute,
								    "is_required":values.is_required,
									"control_type":values.control_type,
									"display_order":values.display_order,
									"size_chart":values.size_chart
								}]
							})
        		}
        		d.hide();
        		cur_frm.save();
    			}
			});
		d.show()
    }
});
// frape code

// frappe.call({
  //               method: 'employee_management.employee_management.doctype.product_assesment_test.product_assesment_test.get_record',
  //               async: false,
  //               callback: function(data) {

  //                   if (data.message) {
                      
  //                       	console.log(data.message)
  //                      $(cur_frm.fields_dict['display_table'].wrapper).html(frappe.render_template("report", { display: data.message}));
  //                           // $(d.fields_dict['payment_det'].wrapper).html(frappe.render_template("customer", { payments: data.message, button_enable: 0, orderss: cur_frm.doc.name }));
                     

  //                       // else{
  //                       //     $(frm.fields_dict['expense_html'].wrapper).html(frappe.render_template("expense_list", { payments: data.message,button_enable:1,order:frm.doc.name}));
  //                       // }
  //                   }
  //               }
  //           });