// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Order Menu Info', {
	refresh: function(frm) {
		
		$.ajax({
			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
			method:'GET',
			url:'http://192.168.0.156:8000/api/resource/Order Menu Info',
			// dataType:json
		
		success:function(data){console.log(data);},
		error:function(err){console.log(err);},
		});

		//Api Post Data
			var post_data = {
						"doctype":"Order Menu Info",
						"customer_name":"121",
						"order_item_id":"Aj123",
						"order_item":"dress",
						"post_date":"2021-08-10",
						"price":6500,
						 "docstatus":0 ,
						};
		//
		$.ajax({
			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
			method:'POST',
			url:'http://192.168.0.156:8000/api/resource/Order Menu Info',
			dataType: 'json',
			data:JSON.stringify(post_data),
		success:function(data){console.log("sucess insert"+ data);},
		error:function(err){console.log(err);},
		});
		var put_data = {
						"customer_name":"121",
						"order_item_id":"Aj123",
						"order_item":"dress watch",
						//"post_date":"25-08-2021",
						"price":2000,
						 "docstatus":1 ,
						};
		$.ajax({
			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
			method:'PUT',
			url:'http://192.168.0.156:8000/api/resource/Order Menu Info/121',
			dataType: 'json',
			data:JSON.stringify(put_data),
		
		success:function(data){console.log("sucess put"+data)},
		error:function(err){console.log(err);},
		});
		$.ajax({
			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
			method:'Delete',
			url:'http://192.168.0.156:8000/api/resource/Order Menu Info/ertert',
		
		success:function(data){console.log("sucess delete"+data);},
		error:function(err){console.log(err);},
		});


	}

});
