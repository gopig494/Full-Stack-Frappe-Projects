// frappe.listview_settings['Web View'] = {
// 	add_fields: ["name1", "mobile_number", "address"],
// 	get_indicator(doc) {
// 		if (doc.docstatus === 1) {
// 			console.log("submitted")
// 			return [__("Submitted Sucessfully"), "green", "doc.docstatus,=,1"];
// 		}
// 		if (doc.docstatus === 2) {
// 			console.log("cancel")

// 			return [__("Cancelled Sucessfully"), "red", "doc.docstatus,=,2"];
// 		}
// 		if (doc.docstatus === 0) {
// 			console.log("draft")
// 			return [__("Deaft Sucessfully"), "blue", "doc.docstatus,=,0"];
// 		}

// 	}
// };








frappe.listview_settings['Web View'] = {
	add_fields: ["name1", "mobile_number", "address",],
	get_indicator(doc) {
		if (doc.docstatus === 1) {
			console.log("submitted")
			return [__("Submitted Sucessfully"), "green", "doc.docstatus,=,1"];
		}
		if (doc.docstatus === 2) {
			console.log("cancel")

			return [__("Cancelled Sucessfully"), "red", "doc.docstatus,=,2"];
		}
		if (doc.docstatus === 0) {
			console.log("draft")
			return [__("Draft Sucessfully"), "blue", "doc.docstatus,=,0"];
		}

	},
	button: {
		show(doc) {
			return true;
		},
		get_label() {
			return 'Open';
		},
		get_description(doc) {
			return __('View {0}', [`${doc.web_view} ${doc.address}`])
			// return __('Print {0}', [doc.name])
		},
		action(doc) {
			frappe.set_route('Form', "Wallet Transaction", "WE-48");
			// frappe.set_route("" + doc.name);
		}
	},
	onload: function (listview) {
		listview.page.add_menu_item(__("Close"), function () {
			listview.call_for_selected_items(method, { "status": "Completed" });
		});

	}
};












// frappe.listview_settings['Quotation'] = {
// 	add_fields: ["customer_name", "base_grand_total", "status",
// 		"company", "currency", 'valid_till'],
// 	get_indicator: function(doc) {
// 		if(doc.status==="Submitted") {
// 			if (doc.valid_till && doc.valid_till < frappe.datetime.nowdate()) {
// 				return [__("Expired"), "darkgrey", "valid_till,<," + frappe.datetime.nowdate()];
// 			} else {
// 				return [__("Submitted"), "blue", "status,=,Submitted"];
// 			}
// 		} else if(doc.status==="Ordered") {
// 			return [__("Ordered"), "green", "status,=,Ordered"];
// 		} else if(doc.status==="Lost") {
// 			return [__("Lost"), "darkgrey", "status,=,Lost"];
// 		}
// 	}
// };



// frappe.listview_settings['Web View'] = {
// 	add_fields: ["name1", "mobile_number", "address"],
// 	get_indicator: function (doc) {
// 		if (doc.name1 === "Submitted") {
// 			if (doc.mobile_number) {
// 				return [__("Expired"), "darkgrey", "valid_till,<," + frappe.datetime.nowdate()];
// 			} else {
// 				return [__("I Am Working"), "blue", "doc.name1 ,=,Submitted"];
// 			}
// 		} else if (doc.name1 === "Ordered") {
// 			return [__("Vivek"), "green", "doc.name1 ,=,Ordered"];
// 		} else if (doc.name1 === "Lost") {
// 			return [__("Dinesh"), "darkgrey", "doc.name1 ,=,Lost"];
// 		}
// 	}
// };