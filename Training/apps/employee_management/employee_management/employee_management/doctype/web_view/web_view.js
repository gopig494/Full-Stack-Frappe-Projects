// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Web View', {
// 	refresh: function (frm) {

// 		$.ajax({
// 			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
// 			method: 'GET',
// 			url: 'http://192.168.0.156:8000/api/resource/Web View',
// 			// dataType:json

// 			success: function (data) { console.log(data); },
// 			error: function (err) { console.log(err); },
// 		});

// 		//Api Post Data
// 		var post_data = {
// 			"name1": "Gopi",
// 			"mobile_number": "Aj123",
// 			"address": "dress",
// 		};
// 		//
// 		$.ajax({
// 			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
// 			method: 'POST',
// 			url: 'http://192.168.0.156:8000/api/resource/Web View',
// 			dataType: 'json',
// 			data: JSON.stringify(post_data),

// 			success: function (data) { console.log("sucess insert" + data); },
// 			error: function (err) { console.log(err); },
// 		});
// 		var put_data = {
// 			// "name1": "Ajaxie",
// 			"mobile_number": "Aj123456789",
// 			"address": "dressssssss",
// 			// "docstatus":1 ,
// 		};
// 		$.ajax({
// 			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
// 			method: 'PUT',
// 			url: 'http://192.168.0.156:8000/api/resource/Web View/Ajaxie',
// 			dataType: 'json',
// 			data: JSON.stringify(put_data),

// 			success: function (data) { console.log("sucess put" + data) },
// 			error: function (err) { console.log(err); },
// 		});
// 		$.ajax({
// 			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
// 			method: 'Delete',
// 			url: 'http://192.168.0.156:8000/api/resource/Web View/Ajaxie',

// 			success: function (data) { console.log("sucess delete" + data); },
// 			error: function (err) { console.log(err); },
// 		});


// 	}
// });



frappe.ui.form.on('Web View', {
	refresh: function (frm) {

		$.ajax({
			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
			method: 'GET',
			url: 'http://192.168.0.156:8000/api/resource/Web View/Gopiii',
			// dataType:json

			success: function (data) { console.log(data); },
			error: function (err) { console.log(err); },
		});
		// Api Post Data
		var post_data = {
			"name1": "Gopi",
			"mobile_number": "Aj123",
			"address": "dress",
			"child": [{ "name1": "vivek" }]
		};
		//
		$.ajax({
			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
			method: 'PUT',
			url: 'http://192.168.0.156:8000/api/resource/Web View/Gopiii',
			dataType: 'json',
			data: JSON.stringify(post_data),

			success: function (data) { console.log("sucess insert" + data); },
			error: function (err) { console.log(err); },
		});


		var post_data = {
			"name1": "Mysskin",
			"mobile_number": "Aj123",
			"address": "dress",
			"child": [{
				"type": "Web Child",
				"name1": "Mysskin"
			}]
		};
		//
		$.ajax({
			headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
			method: 'POST',
			url: 'http://192.168.0.156:8000/api/resource/Web View',
			dataType: 'json',
			data: JSON.stringify(post_data),

			success: function (data) { console.log("sucess insert" + data); },
			error: function (err) { console.log(err); },
		});

	}
});
