// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Customerb', {

	setup:function(frm){
		alert("hi")
	},
	before_load:function(frm){
		alert("bl")
	},
	refresh:function(frm){
		frm.add_custom_button('Closed', () => {
		    frm.doc.first_name = frm.set_value('first_name', 'Boopathy')
		}, 'Set Status');
	// 	if (!frm.doc.description) {
 //    	frm.set_intro('Please set the value');
	// }

		// frm.set_value('first_name', 'Boopathy')
  //   .then(() => {
  //       frappe.throw("hoi")
  //   })
}


	
});

