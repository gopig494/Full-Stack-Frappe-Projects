
function sam() {
	var formData = {};

	formData.first_name =  $('input[name="fname"]').val();
	formData.last_name =   $('input[name="lname"]').val();
	formData.phone =   $('input[name="phone"]').val();
	formData.email =  $('input[name="email"]').val();
	formData.password =   $('input[name="pass1"]').val();
	
	



	
	 if (contact_validate_fields1(formData)) {
	 	 $.ajax({
                                    type: 'POST',
                                    Accept: 'application/json',
                                    ContentType: 'application/json;charset=utf-8',
                                    url: window.location.origin + '/api/method/employee_management.employee_management.doctype.customer_registrationb.customer_registrationb.insert_doc',
                                    data: {'doc': JSON.stringify(formData)},
                                    dataType: "json",
                                    Expect: 417,
                                    async: false,
                                    headers:{

                                        'X-Frappe-CSRF-Token':frappe.csrf_token
                                    },
                                    // success:function(data){
                                    //     var b = sam(data)
                                    //     console.log(data._server_messages);
                                    // },
                                    // error:function(err){console.log(err);},

                                    success: function(data) {
                                        if (data.message) {
                                            console.log(data);
                                            // $('#error-response').hide();
                                            //     $('#response').show();                                      
                                            //     setTimeout(function() {
                                            //         $('#response').hide();
                                            //     }, 3000)
                                            //     $('input[type="text"], textarea').val('');
                                            //     $('input[type="email"], textarea').val('');
                                            //     $('input[type="number"], textarea').val('');
                                            }
                                        },
                                        error: function (xhr, httpStatusMessage, customErrorMessage) {
                                                if (xhr.status === 410) {
                                                  alert(customErrorMessage);}}});
                                         //   error: function(xhr, status, error){
                                         //       console.log(data)

                                         //     var errorMessage = xhr.status + ': ' + xhr.statusText
                                         //     alert('Error - ' +_server_messages);
                                         // }

                                            // error: function(data){
                                            //    if (data._server_messages) {
                                            //     var server_messages = JSON.parse(data._server_messages || '[]');
                                            //     server_messages.map((msg) => {
                                            //         // temp fix for messages sent as dict
                                            //         try {
                                            //             return JSON.parse(msg);
                                            //         } catch (e) {
                                            //             return msg;
                                            //         }
                                            //     }).join('<br>');
                                            //     // frappe.msgprint(server_messages);
                                            //     $('#error-response').text(JSON.parse(server_messages[0]).message); 
                                            //     $('#error-response').show();
                                               
                                            // }
                                                    
                                         
                                   
                               
                            })
         }
     }


                        

 // function sam(data) {
 //     console.log(message)
    //  data.map((message) => {

    //      console.log(m);
    // })


     // if (data.message) {

    //  }

    //         // $('#error-response').hide();
    //         //     $('#response').show();                                      
    //         //     setTimeout(function() {
    //         //         $('#response').hide();
    //         //     }, 3000)
    //         //     $('input[type="text"], textarea').val('');
    //         //     $('input[type="email"], textarea').val('');
    //         //     $('input[type="number"], textarea').val('');
           
    // else{
    //    if (data._server_messages) {
    //     var server_messages = JSON.parse(data._server_messages || '[]');
    //     server_messages.map((msg) => {
    //         // temp fix for messages sent as dict
    //         try {
    //             return JSON.parse(msg);
    //         } catch (e) {
    //             return msg;
    //         }
    //     }).join('<br>');
    //     // frappe.msgprint(server_messages);
    //     $('#error-response').text(JSON.parse(server_messages[0]).message); 
    //     $('#error-response').show();
       
    // }
            
    // }
   
// }








	 function contact_validate_fields1(formData) {
        
            let allowsubmit=true;
            // if(formData.first_name==''){
            //     allowsubmit=false;
            //     $('#fname').show();
            //     $(".fname").click(function() {
            //         $("#fname").hide();

            //     });
            // }    
            // if(formData.last_name==''){
            //     allowsubmit=false;
            //     $('#contact-last-name-err').show();
            //     $(".username").click(function() {
            //         $("#contact-last-name-err").hide();

            //     });
            // }       
            if(formData.email==''){
                allowsubmit=false;
                $('#contact-mail-err').show();
                $(".email").click(function() {
                    $("#contact-mail-err").hide();
                });     
            }
            else{
                if(!ValidateEmail(formData.email)){
                    allowsubmit=false;
                    $('#valid-mail-err').show();
                    $('#mailid').keydown(function(){
                        $('#valid-mail-err').hide();
                    });
                }
            }
            // if(formData.phone==''){
            //     allowsubmit=false;
            //     $('#contact-phone-err').show();
            //     $(".phonenumber").click(function() {
            //         $("#contact-phone-err").hide();
            //     });
            // }
            // if(formData.password==''){
            //     allowsubmit=false;
            //     $('#contact-password-err').show();
            //     $(".password").click(function() {
            //         $("#contact-password-err").hide();
            //     });
            // }
           
            return allowsubmit;
       }
	
	



function ValidateEmail(inputtxt){
	var em = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	 if (inputtxt.match(em)) {
            //frappe.msgprint("valid phone number")
            return true;
        } else {
            // frappe.throw({
            //     title: __('Wrong Phone Number'),
            //     indicator: 'red',
            //     message: __('wrong number')
            // });
            return false;
        }
    }



	




	

	





// function phonenumber(inputtxt) {
//         console.log("PH Number Enter")
//         var phoneno = /^\d{10}$/;
//         if (inputtxt.match(phoneno)) {
//             //frappe.msgprint("valid phone number")
//             return true;
//         } else {
//             // frappe.throw({
//             //     title: __('Wrong Phone Number'),
//             //     indicator: 'red',
//             //     message: __('wrong number')
//             // });
//             return false;
//         }
// }

// function valemail(inputtxt){
// 	var em = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	 if (inputtxt.match(em)) {
//             //frappe.msgprint("valid phone number")
//             return true;
//         } else {
//             // frappe.throw({
//             //     title: __('Wrong Phone Number'),
//             //     indicator: 'red',
//             //     message: __('wrong number')
//             // });
//             return false;
//         }


// }
// function checkpass(inputtxt){
// 	var passw=  /^[A-Za-z]\w{7,14}$/;
// 	if (inputtxt.match(passw)) {
//             //frappe.msgprint("valid phone number")
//             return true;
//         } else {
//             // frappe.throw({
//             //     title: __('Wrong Phone Number'),
//             //     indicator: 'red',
//             //     message: __('wrong number')
//             // });
//             return false;
//         }


// }
	// 	frappe.call({
	// 			method: 'employee_management.employee_management.doctype.customer_registrationb.customer_registrationb.get_insert',
	// 			args: {
	// 				fname: fname,
	// 				lname: lname,
	// 				phone:phone,
	// 				email:email,
	// 				password:pass1,
					
	// 			}
				
	// 			// console.log("I Am Working")
	// 		});
	// }

