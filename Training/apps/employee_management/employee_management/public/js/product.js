function sam(el){
	var id = $(el).attr('data-id');
        // alert(id);
        res = frappe.model.get_doc('Product Variants', id ) 
        // console.log(res);
       
        
        	


        let d = new frappe.ui.Dialog({
			title: 'Enter details',
			fields: [
	        {
	            label: 'Product Attribute',
	            fieldname: 'product_attribute',
	            fieldtype: 'Data',
	            default: res.product_attribute
	        },
	        {
	            label: 'Is Required',
	            fieldname: 'is_required',
	            fieldtype: 'Data',
	            default:res.is_required
	        },
	        {
	            label: 'Control Type',
	            fieldname: 'control_type',
	            fieldtype: 'Data',
	            default:res.control_type
	        },
	        {
	            label: 'Display Order',
	            fieldname: 'display_order',
	            fieldtype: 'Data',
	            default:res.display_order
	        }
	    ],
	   primary_action_label: 'Submit',
				    primary_action(values) {

				    	console.log(values);
				    	 frappe.call({
				        	method:"employee_management.employee_management.doctype.product_values.product_values.insert_attr",
				        	args:{
				        		 "product_attribute": values.product_attribute,
		                        "is_required": values.is_required,
		                        "display_order": values.display_order,
		                      
		                        "control_type": values.control_type,
		                        "name":id,
		                        "values":values
				        	},
				        	callback:function(data){
				        		console.log(data.message);
				        	}
				        	
				        })
				    	
				    	// cur_frm.set_value({


         //            		pv: [{
				    	// 	res.product_attribute:m,
		       //                  "is_required": values.is_required,
		       //                  "display_order": values.display_order,
		                      
		       //                  "control_type": values.control_type,

				    	// }]
				    // })
				    // 	cur_frm.save();

				    	// cur_frm.dialog.set_value("product_attribute", values.product_attribute,)
				    	// cur_frm.save();


				   //  	cur_frm.set_value({
				   //  		  "product_attribute": values.product_attribute,
		     //                    "is_required": values.is_required,
		     //                    "display_order": values.display_order,
		                      
		     //                    "control_type": values.control_type,
		                       


							
							// });
				   //  	cur_frm.save();
				    	
        d.hide();
    }
});

d.show();




	    
 
	
}
function del(el){
	var id = $(el).attr('data-id');
	// alert(id);
	// doc.remove(id)
	 frappe.call({


    	method:"employee_management.employee_management.doctype.product_values.product_values.delete_record",
    	args:{
    		"name":id
    	},
    	callback:function(data){
    		frappe.msgprint("Deleted Successfully" + id)

    	}
    });
	  window .location.reload('pv');
}
   

 
 





