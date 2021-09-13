frappe.listview_settings['Order Menu Info'] = {
	// add_fields: ["customer_name"],
	hide_name_column: true,
	get_indicator: function(doc) {
		if(doc.docstatus==0){
			return [__("Draft"), "yellow", "docstatus,=,Draft"];
		}
		else if(doc.docstatus==1) {
			return [__("Submitted"), "green", "docstatus,=,Submitted"];
		}
		else if(doc.docstatus==2){
			return [__("cancel"), "black", "docstatus,=,Cancelled"];
		}
	},
	button: {
        show(doc) {
            return doc.customer_name
        },
         get_label() {
            return 'Open Document';
        },
        get_description(doc) {
            return __('View {0}', [doc.name])
        },
        action(doc) {
        	//frappe.set_route("")
        	frappe.set_route('Form', "Order Menu Info", doc.customer_name);
        	// var objWindowOpenResult = window.open(frappe.urllib.get_full_url("/desk#Form/Order Menu Info/"
         //      + encodeURIComponent(doc.customer_name)
         //    ));
         //    if(!objWindowOpenResult) {
         //      msgprint(__("Please set permission for pop-up windows in your browser!")); return;
         //    }
            
        }
    },

	onload: function(listview) {
		//var method = "erpnext.selling.doctype.sales_order.sales_order.close_or_unclose_sales_orders";

		// listview.page.button(__("Close"), function() {
		// 	// listview.call_for_selected_items(method, {"status": "Closed"});
		// });

		listview.page.add_menu_item(__("Re-open"), function() {
			// listview.call_for_selected_items(method, {"status": "Submitted"});
		});

	}
	
};
