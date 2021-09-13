// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Product values', {
// 	refresh: function(frm) {
// 		// var m locals[cdt][cdn]
// 		// console.log(m)
// 		 frappe.call({
//                 method: 'employee_management.employee_management.doctype.product_values.product_values.get_record',
//                 args: {
//                     'id': cur_frm.doc.name
//                 },

//                 async: false,
//                 callback: function(data) {
//                 	console.log(data.message)

//                     if (data.message) {
//                         if (data.message.length > 0) {
//                             $(cur_frm.fields_dict['pc'].wrapper).html(frappe.render_template("product", { payments: data.message, button_enable: 0, orderss: cur_frm.doc.name }));
//                         }

//                         // else{
//                         //     $(frm.fields_dict['expense_html'].wrapper).html(frappe.render_template("expense_list", { payments: data.message,button_enable:1,order:frm.doc.name}));
//                         // }
//                     }
//                 }
//             });

   

// 	},
// 	add:function(frm){
// 		let d = new frappe.ui.Dialog({
// 	    title: 'Enter details',
// 	    fields: [
	       
// 	        {
// 	            label: 'Product Attribute',
// 	            fieldname: 'product_attribute',
// 	            fieldtype: 'Data'
// 	        },
// 	        {
// 	            label: 'Is Required',
// 	            fieldname: 'is_required',
// 	            fieldtype: 'Data'
// 	        },
// 	        {
// 	        	label: 'Control Type',
// 	            fieldname: 'control_type',
// 	            fieldtype: 'Data',
	           

// 	        },
// 	         {
// 	        	label: 'Display order',
// 	            fieldname: 'display_order',
// 	            fieldtype: 'Data',
	           

// 	        },
// 	         {
// 	        	label: 'Size',
// 	            fieldname: 'size_chart',
// 	            fieldtype: 'Data',
	           

// 	        }
// 	    ],
// 	    primary_action_label: 'Submit',
// 				    primary_action(values) {
// 				    	console.log(values);

// 				    	let row = frm.add_child('pv', {
// 				    		  "product_attribute": values.product_attribute,
// 		                        "is_required": values.is_required,
// 		                        "display_order": values.display_order,
		                      
// 		                        "control_type": values.control_type,
// 		                        "size_chart": values.size_chart


							
// 							});
// 				    	frm.save();
// 				    	frm.refresh_field("pv");


				    	 
// 				    	// frm.set_value({


//          //            		pv: [{

// 		       //                  "product_attribute": values.product_attribute,
// 		       //                  "is_required": values.is_required,
// 		       //                  "display_order": values.display_order,
		                      
// 		       //                  "control_type": values.control_type,
// 		       //                  "size_chart": values.size_chart
//          //            }]
// 				    	// var pa = values.pa
// 				    	// var isr = values.is
// 				    	// var ct = values.ct
// 				    	// var ds = values.ds
				    	
// 				    	// var sz = values.sz
// 				    	// var name= cur_frm.doc.name
// 				    	// console.log(cur_frm.doc.name);

// 				     //    frappe.call({
// 				     //    	method:"employee_management.employee_management.doctype.product_values.product_values.insert_attr",
// 				     //    	args:{
// 				     //    		"pa":pa,
// 				     //    		"isr":isr,
// 				     //    		"ct":ct,
// 				     //    		"ds":ds,
// 				     //    		"sz":sz,
// 				     //    		"name":name
				        		
// 				     //    	},
// 				     //    	callback:function(data){
// 				     //    		console.log(data.message);
// 				     //    	}
				        	
// 				        // })
// 				        d.hide();
// 				    }
// 	})
// 		d.show()
// }



	
	
// });
// // frappe.ui.form.on('Product Variants', {
// // 	onload:function(frm){
// // 		 document.getElementById("fname").defaultValue = "Goofy";

// // 	},


// // options: function(frm, cdt, cdn){
// // 	var m = locals[cdt][cdn]
// // 	// d.forEach(function(m){

// // 	console.log(m.product_attribute)
// // 	 let d = new frappe.ui.Dialog({
// //            title:"Payment details",
// //            fields:[
// //            {
// //                label:"Payment_det",
// //                fieldname:"payment_det",
// //                fieldtype:"HTML"

// //            }
// //            ]


// //        })
// //        $(d.fields_dict['payment_det'].wrapper).html(frappe.render_template("edit", { edit: d, button_enable: 0, orderss: cur_frm.doc.name }));
// 	        // {
// 	        //     label: 'price',
// 	        //     fieldname: 'price',
// 	        //     fieldtype: 'Currency'
// 	        // },
// 	        // {
// 	        // 	label: 'weight',
// 	        //     fieldname: 'weight',
// 	        //     fieldtype: 'Data',
	           

// 	        // }
// 	    // ],
// // 	    primary_action_label: 'Submit',
// // 	    primary_action(values) {

// // 	    	var stock = values.stock_qty
// // 	    	var vr = values.valuation_rate
// // 	    	var purpose = values.purpose
// // 	    	console.log(cur_frm.doc.name);

// // 	        frappe.call({
// // 	        	method:"employee_management.employee_management.doctype.productb.productb.update_stock",
// // 	        	args:{
// // 	        		"stock":stock,
// // 	        		"vr": vr,
// // 	        		"purpose":purpose,
// // 	        		"name":cur_frm.doc.name
	        		
// // 	        	}
	        	
// 	        // })
// 	        // d.hide();
// 	//     }
// 	// });

// // 	d.show()
	
// // }


// // })



      
    

      

// ;