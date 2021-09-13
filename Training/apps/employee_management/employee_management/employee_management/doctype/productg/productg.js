// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('ProductG', {
	onload: function (frm) {
		cur_frm.set_query("product_category", function () {
			return {
				"filters": {
					"is_available": true
				}
			};
		});
	}

});
