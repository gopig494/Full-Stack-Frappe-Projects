// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Wallet Transactionb', {
	refresh:function(frm){
		frm.set_query('customer', () => {
	    return {
	        filters: {
	            customer_name: 'Boopathy'
	        }
    }
})
}
   

});
