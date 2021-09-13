// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt
frappe.ui.form.on('Payment Menu', {
	refresh: function(frm) {
		$.ajax({
			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
			method:'GET',
			url:'http://192.168.0.156:8000/api/resource/Payment Menu/PAY-DETAIL-!047',
			// dataType:json
		
		success:function(data){console.log(data);},
		error:function(err){console.log(err);},
		});

		//Api Post Data
			var post_data = {
						
						//"customer_name":"121",
						"party_name":"Ajxfgdfgdfg",
						"party":"dresssss",
						"posting_date":"2021-08-10",
						"paid_amount":500,
						"allocate_payment_amout":true,
						"payment_reference":[
						{
							"type":"Order Menu Info",
							"name1":"anpu",
						}],
						};
		
		$.ajax({
			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
			method:'POST',
			url:'http://192.168.0.156:8000/api/resource/Payment Menu',
			dataType: 'json',
			data:JSON.stringify(post_data),
		success:function(data){console.log("sucess insert"+ data);},
		error:function(err){console.log(err);},
		});
		//
		var put_data = {
						//"customer_name":"121",
						"party_name":"Ajx",
						"party":"dres",
						"posting_date":"2021-08-10",
						"paid_amount":500,
						"allocate_payment_amout":true,
						"payment_reference":[
						{
							"type":"Order Menu Info",
							"name1":"anpu",
						}],
						};
		$.ajax({
			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
			method:'PUT',
			url:'http://192.168.0.156:8000/api/resource/Payment Menu/PAY-DETAIL-!052',
			dataType: 'json',
			data:JSON.stringify(put_data),
		
		success:function(data){console.log("sucess put"+data);},
		error:function(err){console.log(err);},
		});
		$.ajax({
			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
			method:'Delete',
			url:'http://192.168.0.156:8000/api/resource/Payment Menu/PAY-DETAIL-!052',
		
		success:function(data){console.log("sucess delete"+data);},
		error:function(err){console.log(err);},
		});


	}
})
