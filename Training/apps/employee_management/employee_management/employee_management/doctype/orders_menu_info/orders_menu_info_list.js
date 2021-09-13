frappe.listview_settings['Orders Menu Info'] = {
	add_fields: ["customer_name", "product_name", "order_date", "total_price", 
	"paid_amount"
		],

	get_indicator: function(doc) {
		if(doc.status==="Submitted") {
			if (doc.valid_till && doc.valid_till < frappe.datetime.nowdate()) {
				return [__("Expired"), "darkgrey", "valid_till,<," + frappe.datetime.nowdate()];
			} else {
				return [__("Submitted"), "blue", "status,=,Submitted"];
			}
		} else if(doc.status==="Ordered") {
			return [__("Ordered"), "green", "status,=,Ordered"];
		} else if(doc.status==="Lost") {
			return [__("Lost"), "darkgrey", "status,=,Lost"];
		}
	},

};

frappe.listview_settings['Orders Menu Info'] = {

    hide_name_column: true,
    button: {
        show: function(doc) {
            return true;
        },
        get_label: function() {
            return __('OPEN DOCUMENT');
        },
        get_description: function(doc) {
            return __('Print {0}', [doc.name])
        },
        action: function(doc) {

            frappe.set_route('Form', "Orders Menu Info", doc.name);
           // var objWindowOpenResult = window.open(frappe.urllib.get_full_url("desk#Form/Orders Menu Info/"
           //    + encodeURIComponent(doc.name)
           //  ));
           //  if(!objWindowOpenResult) {
           //    msgprint(__("Please set permission for pop-up windows in your browser!")); return;
           //  }
        }
       }

    };



