// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Product Vivek', {
	// refresh: function(frm) {

	// }
	onload: function(frm){
      cur_frm.set_query("category", function() {
            return {
                "filters": {
                    "available": true
                }
            };
        });
    }
	// category:function(frm)
	// { 
	// let value = frappe.call({
 // 	method: "frappe.client.get",
 // 	args: {
 // 	doctype: "Category Vivek",
	//  name: frm.doc.category,
 // 	},
 // 	callback(r) {
 // 		if(r.message) {
 // 		console.log(r.message.availsble)
 // 			if(r.message.availsble == 0){
 // 				frm.set_df_property("product_name", "read_only",1);
	// 			frm.set_df_property("product_price", "read_only",1);
	// 			frm.set_df_property("product_description", "read_only",1);
	// 			console.log("sucess");
 // 				}
	// 		 else{
 // 				frm.set_df_property("product_name", "read_only",0);
	// 			frm.set_df_property("product_price", "read_only",0);
	// 			frm.set_df_property("product_description", "read_only",0);

 // 			}
	// 	}
 // 	}
 // });
	// for i in value{
	//console.log("get value "+value.message);
	// }
	// let value = frappe.get_doc("Category Vivek", frm.doc.category)
	

	// frm.set_df_property("product_name", "read_only",1);
	// frm.set_df_property("product_price", "read_only",1);
	// frm.set_df_property("product_description", "read_only",1);
	// console.log("sucess");
	// }

});
