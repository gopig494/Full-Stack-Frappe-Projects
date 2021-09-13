// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Productb', {
	before_save:function(frm){
		if(frm.doc.maintain_stock ==1){
			frm.set_df_property('stock_item','reqd',1)
			


		}



	},
	refresh:function(frm){

		if(!frm.is_new()){
			frm.set_df_property("stock_item",'read_only',1)
			frm.add_custom_button("Update Stocks",()=>{
				let d = new frappe.ui.Dialog({
				    title: 'Enter details',
				    fields: [
				       
				        {
				            label: 'Stock qty',
				            fieldname: 'stock_qty',
				            fieldtype: 'Int'
				        },
				        {
				            label: 'Valuation rate',
				            fieldname: 'valuation_rate',
				            fieldtype: 'Currency'
				        },
				        {
				        	label: 'Purpose',
				            fieldname: 'purpose',
				            fieldtype: 'Select',
				            options:["Material Receipt","Material Transfer"]

				        }
				    ],
				    primary_action_label: 'Submit',
				    primary_action(values) {
				    	var stock = values.stock_qty
				    	var vr = values.valuation_rate
				    	var purpose = values.purpose
				    	console.log(cur_frm.doc.name);

				        frappe.call({
				        	method:"employee_management.employee_management.doctype.productb.productb.update_stock",
				        	args:{
				        		"stock":stock,
				        		"vr": vr,
				        		"purpose":purpose,
				        		"name":cur_frm.doc.name
				        		
				        	}
				        	
				        })
				        d.hide();
				    }
				});

				d.show()
				
			})
		
	}
}
});
