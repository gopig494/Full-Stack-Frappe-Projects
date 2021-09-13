// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Stock Entry Vivek', {
	refresh: function(frm) {
		frm.set_query("product_id","product_info", function() {
            return {
                "filters": {
                   "is_stock_item" : true
                }
            };
        });

	}
});

// frappe.ui.form.on('Stock Reference', {
//     onload: function(frm,cdt,cdn){
      
//     }
// });