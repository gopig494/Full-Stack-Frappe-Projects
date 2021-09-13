frappe.listview_settings['Test Menu'] = {
	add_fields: ["product_name", "status"],
	get_indicator: function(doc) {
		if(doc.status==="Submitted") {
			return [__("Submitted"), "yellow", "status,=,Submitted"];
			}
	    if(doc.status==="Ordered") {
			return [__("Ordered"), "green", "status,=,Ordered"];
		}
		if(doc.status==="Lost") {
			return [__("Lost"), "darkgrey", "status,=,Lost"];
		}
	}
};

