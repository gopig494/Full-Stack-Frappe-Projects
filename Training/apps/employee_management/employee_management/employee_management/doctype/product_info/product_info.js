// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Product Info', {
	refresh: function(frm) {
	 if (!frm.is_new()) {
	frm.add_custom_button(__('Update Stock'), function () {

	let d = new frappe.ui.Dialog({
    title: 'Stock details',
    fields: [    
        {
            label: 'Product Id',
            fieldname: 'Product_id',
            fieldtype: 'Data'
        },
        {
            label: 'Product Name',
            fieldname: 'product_name',
            fieldtype: 'Data'
        },
        {
            label: 'Stock Qty',
            fieldname: 'stock_qty',
            fieldtype: 'Data'
        },
        {
            label: 'Valuation Rate',
            fieldname: 'valuation_rate',
            fieldtype: 'Currency',
            value: cur_frm.doc.valuation_rate,
        },
        {
            label: 'Prupose',
            fieldname: 'purpose',
            fieldtype: 'Select',
            options : ['Material Recept', 'Material Transfer']
        },
    ],
    		primary_action_label: 'Submit',
    		primary_action(values) {
        		console.log(values);
        			d.hide();
    			}
			});
		d.show();
			});
		}
	},

	is_stock_item: function(frm){
		if (cur_frm.doc.is_stock_item == 1){
			cur_frm.set_df_property("opening_stock","reqd",1)
			cur_frm.set_df_property("valuation_rate","reqd",1)
			console.log("product")
		}
		}
});


