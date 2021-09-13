function DeleteRow(e){
	// frappe.msgprint("hello delete work");
	// frappe.delete_doc("Product Variant Assesment",idd)
	// console.log("id",idd);
	var idd = ($(e).attr("data-id"))
	frappe.confirm('Are you sure you want to proceed?',
    () => {
    	//
    	frappe.call({
        method: "frappe.client.delete",
        args: {
            doctype: "Product Variant Assesment",
            name: idd,
        },
        callback(r) {
           console.log(r.message,"deleted sucessfully");
           cur_frm.reload_doc()
        }
    	})

    	//
        //$.ajax({
		// 	headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
		// 	method:'Delete',
		// 	url:'http://192.168.0.156:8000/api/resource/Product Variant Assesment/'+idd,
		
		// success:function(data){console.log("sucess delete"+data);
		// cur_frm.reload_doc()
		// },
		// error:function(err){console.log(err);},
		// });
        // action to perform if Yes is selected
        //
        //
    }, () => {
        // action to perform if No is selected
    })

	// frappe.get_doc("")
	// cur_frm.save()

}
function EditRowValue(e){
	// frappe.msgprint("hello edit work");
	//
	console.log(e);
	var getid = ($(e).attr("data-id"))

            getRecord = frappe.model.get_doc('Product Variant Assesment', getid )
            console.log("get chlid  ",getRecord.product_attribute);
            let d = new frappe.ui.Dialog({
    		title: 'Enter details',
    		fields: [{
           			 	label: 'Product Attribute',
            			fieldname: 'product_attribute',
            			fieldtype: 'Data',
            			// default:data.data.product_attribute
            			default:getRecord.product_attribute
            			
        			},
        			{
            			label: 'Is Required',
			            fieldname: 'is_required',
			            fieldtype: 'Select',
            			options: [
				        			'Yes',
				        			'No'
				    			],
				    			default:getRecord.is_required
				    	// default:data.data.is_required
        			},
			        {
			            label: 'Control Type',
			            fieldname: 'control_type',
			            fieldtype: 'Data',
			            default:getRecord.control_type
			            // default:data.data.control_type
			        },
			        {
			            label: '',
			            fieldname: 'cbreak',
			            fieldtype: 'Column Break'
			            
			        },
			        {
			            label: 'Display Order',
			            fieldname: 'display_order',
			            fieldtype: 'Int',
			            default:getRecord.display_order
			            // default:data.data.display_order
			        },
			        {
			            label: 'Size Chart',
			            fieldname: 'size_chart',
			            fieldtype: 'Data',
			            default:getRecord.size_chart
			            // default:data.data.size_chart
			        }
    				],
    		primary_action_label: 'Submit',
    		primary_action(values) {
    			console.log(values,"sumbit")
    			frappe.call({
				        	method:"employee_management.employee_management.doctype.product_assesment_test.product_assesment_test.update_call",
				        	args:{
				        		 "product_attribute": values.product_attribute,
		                        "is_required": values.is_required,
		                        "control_type": values.control_type,
		                        "display_order": values.display_order,
		                        "size_chart": values.size_chart,
		                        "name":getid,
				        	},
				        	callback:function(data){
				        		console.log(data.message);
				        		cur_frm.reload_doc()
				        	}
				        	
				        })
        		d.hide();
    			}
			});
		d.show()


                }
            // });
	// frappe.call({
 //        method: "frappe.client.get",
 //        // headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
 //        args: {
 //            doctype: "Product Variant Assesment",
 //            name: getid,
 //        },
 //        callback(r) {
 //           console.log(r.message,"get sucessfully");
 //           cur_frm.reload_doc()
 //        }
 //    	})
	// $.ajax({
	// 		headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
	// 		method:'GET',
	// 		url:'http://192.168.0.156:8000/api/resource/Product Variant Assesment/'+getid,
	// 		// dataType:json
		
	// 	success:function(data){console.log(data.data.product_attribute);
	// 		let d = new frappe.ui.Dialog({
 //    		title: 'Enter details',
 //    		fields: [{
 //           			 	label: 'Product Attribute',
 //            			fieldname: 'product_attribute',
 //            			fieldtype: 'Data',
 //            			default:data.data.product_attribute
            			
 //        			},
 //        			{
 //            			label: 'Is Required',
	// 		            fieldname: 'is_required',
	// 		            fieldtype: 'Select',
 //            			options: [
	// 			        			'Yes',
	// 			        			'No'
	// 			    			],
	// 			    	default:data.data.is_required
 //        			},
	// 		        {
	// 		            label: 'Control Type',
	// 		            fieldname: 'control_type',
	// 		            fieldtype: 'Data',
	// 		            default:data.data.control_type
	// 		        },
	// 		        {
	// 		            label: '',
	// 		            fieldname: 'cbreak',
	// 		            fieldtype: 'Column Break'
			            
	// 		        },
	// 		        {
	// 		            label: 'Display Order',
	// 		            fieldname: 'display_order',
	// 		            fieldtype: 'Int',
	// 		            default:data.data.display_order
	// 		        },
	// 		        {
	// 		            label: 'Size Chart',
	// 		            fieldname: 'size_chart',
	// 		            fieldtype: 'Data',
	// 		            default:data.data.size_chart
	// 		        }
 //    				],
 //    		primary_action_label: 'Submit',
 //    		primary_action(values) {
 //    			// var docVal = frappe.get_doc("Product Variant Assesment")
 //    			// docVal.name = getid
 //    			// docVal.product_attribute = values.product_attribute
 //    			// docVal.is_required =values.is_required
 //    			// docVal.control_type = values.control_type
 //    			// docVal.display_order = values.display_order
 //    			// docVal.size_chart = values.size_chart
 //    			// console.log(values,"sumbit");
 //    			// frappe.call({
 //       //  			method: "frappe.client.save",
 //       //  			args: {
 //       //      			doc: docVal,
            			


 //       //  			},
 //       //  			callback(r) {
 //       //     				console.log(r.message,"updated sucessfully");
 //       //     				cur_frm.reload_doc()
 //       //  			}
 //    			// })
 //    			$.ajax({
	// 				headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
	// 				method:'PUT',
	// 				url:'http://192.168.0.156:8000/api/resource/Product Variant Assesment/'+getid,
	// 				dataType: 'json',
	// 				data:JSON.stringify(values),
		
	// 				success:function(data){console.log("sucess put"+data);
	// 			cur_frm.reload_doc()},
	// 				error:function(err){console.log(err);},
	// 			});
 //        		d.hide();
 //    			}
	// 		});
	// 	d.show()
	// 		},
	// 	error:function(err){console.log(err);},
		// });
// }