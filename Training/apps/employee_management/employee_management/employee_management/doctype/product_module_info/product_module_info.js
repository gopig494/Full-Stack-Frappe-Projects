// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Product Module Info', {
	onload: function(frm){
      cur_frm.set_query("category", function() {
            return {
                "filters": {
                    "is_active": true
                }
            };
        });
    }
});
