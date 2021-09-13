// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Payment Module Info', {
	refresh: function(frm) {

        $.ajax({
            headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
            method:'GET',
            url:'http://192.168.0.156:8000/api/resource/Payment Module Info',
        
        success:function(data){console.log("Hii");},
        error:function(err){console.log(err);},
});

        //Api Post Data
            var post_data = {
                       "posting_date":"2021-08-26",
                        "party_name":"Dineshh",
                        "paid_amount":"500",
                        "payment_references":[{
                        	"type":"Orders Menu Info",
                      		"ref_name":"sdgtsdefrg"
                    }],
                        
                        }       
        $.ajax({
            headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
            method:'POST',
            url:'http://192.168.0.156:8000/api/resource/Payment Module Info',
            dataType: 'json',
            data:JSON.stringify(post_data),
        
        success:function(data){console.log("sucess insert"+data);},
        error:function(err){console.log(err);},
        });
        var put_data ={
                       "posting_date":"2021-08-29",
                        "party_name":"Dinesuuu",
                        "paid_amount":"800",
                        "payment_references":[{
                        	"type":"Orders Menu Info",
                      		"ref_name":"sdgtsdefrg"
                    }],
                        
                        }         
        $.ajax({
            headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
            method:'PUT',
            url:'http://192.168.0.156:8000/api/resource/Payment Module Info/PAY-00062',
            dataType: 'json',
            data:JSON.stringify(put_data),
        
        success:function(data){console.log("sucess put"+data)},
        error:function(err){console.log(err);},
        });
        $.ajax({
            headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
            method:'Delete',
            url:'http://192.168.0.156:8000/api/resource/Payment Module Info/PAY-00062',
        
        success:function(data){console.log("sucess delete"+data);},
        error:function(err){console.log(err);},
        });
  


	}
});
