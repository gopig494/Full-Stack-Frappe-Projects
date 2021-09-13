// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Product Stock Vivek', {
	is_stock_item:function(frm){
		if (cur_frm.doc.is_stock_item == 1){
			cur_frm.set_df_property("opening_stock","reqd",1)
			cur_frm.set_df_property("valuation_rate","reqd",1)
			console.log("sucess");
		}
		else{
			cur_frm.set_df_property("opening_stock","reqd",0)
			cur_frm.set_df_property("valuation_rate","reqd",0)
		}
	}
	// refresh: function(frm) {

	// }
});
