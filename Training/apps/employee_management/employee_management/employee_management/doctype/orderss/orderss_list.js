frappe.listview_settings['Orderss'] = {
	add_fields: ["product_name","paid_amount"],
	get_indicator: function(doc) {
		if(doc.docstatus ===0){
			console.log("000")
			return[__("Bending"),"black", "docstatus,=,0"];
		}
		// else if(doc.docstatus ==0){
		// 	console.log("oo")
		// 	return[__("Bending"),"yellow", "docstatus,=,0"];
		// }

	
	},
	// hide_name_column=true,
	




	 button: {
        show(doc) {
            return doc.name
        },
         get_label() {
            return 'View';
        },
        get_description(doc) {
            return __('View {0}', [`${doc.payments} ${doc.name}`])
        },
        action(doc) {
            frappe.set_route('Form','Payments','hh');
        }
    },
    
	// Doubt
	onload: function(listview){
		listview.page.add_menu_item(__("Close"), function () {
			listview.call_for_selected_items(method, { "status": "Completed" });
		});

		
		
	}
};