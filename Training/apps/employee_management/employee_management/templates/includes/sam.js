function resellerSubmit() {
        try{
            var formData = {};
            formData.first_name = $('#first_name').val();
            formData.last_name = $('#last_name').val();
            formData.email = $('#mailid').val();
            formData.phone = $('#phonenumber').val();
            formData.set_new_password = $('#password').val();
            formData.doctype = "Customer Registration"
            
            $('#contact-first-name-err').hide();
            $('#contact-last-name-err').hide();
            $('#contact-mail-err').hide();
            $('#contact-phone-err').hide();
            
            if (contact_validate_fields1(formData)) {
              
                            $.ajax({
                                    type: 'POST',
                                    Accept: 'application/json',
                                    ContentType: 'application/json;charset=utf-8',
                                    url: window.location.origin + '/api/method/ecommerce_business_store.ecommerce_business_store.mobileapi.insert_doc',
                                    data: {'doc': JSON.stringify(formData)},
                                    dataType: "json",
                                    async: false,
                                    headers:{

                                        'X-Frappe-CSRF-Token':frappe.csrf_token
                                    },
                                    success: function(data) {
                                        if (data.message) {
                                            $('#error-response').hide();
                                                $('#response').show();                                      
                                                setTimeout(function() {
                                                    $('#response').hide();
                                                }, 3000)
                                                $('input[type="text"], textarea').val('');
                                                $('input[type="email"], textarea').val('');
                                                $('input[type="number"], textarea').val('');
                                            }
                                            else{
                                               if (data._server_messages) {
                                                var server_messages = JSON.parse(data._server_messages || '[]');
                                                server_messages.map((msg) => {
                                                    // temp fix for messages sent as dict
                                                    try {
                                                        return JSON.parse(msg);
                                                    } catch (e) {
                                                        return msg;
                                                    }
                                                }).join('<br>');
                                                // frappe.msgprint(server_messages);
                                                $('#error-response').text(JSON.parse(server_messages[0]).message); 
                                                $('#error-response').show();
                                               
                                            }
                                                    
                                            }
                                   
                                }
                            })
                        }
           
        }
        catch(e){   
            var err = e.toString();
            frappe.call({
                method:'ecommerce_business_store.ecommerce_business_store.api.error_log',
                args:{
                    'err':err,     
                    'title':"cmswebsite.cmswebsite.templates.pages.contact_enquiry.resellerSubmit"          
                },
                callback:function(data){
                }
            })    
        }
    }
    function contact_validate_fields1(formData) {
        try{
            let allowsubmit=true;
            if(formData.first_name==''){
                allowsubmit=false;
                $('#contact-first-name-err').show();
                $(".username").click(function() {
                    $("#contact-first-name-err").hide();

                });
            }    
            if(formData.last_name==''){
                allowsubmit=false;
                $('#contact-last-name-err').show();
                $(".username").click(function() {
                    $("#contact-last-name-err").hide();

                });
            }       
            if(formData.email_id==''){
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
            if(formData.phone==''){
                allowsubmit=false;
                $('#contact-phone-err').show();
                $(".phonenumber").click(function() {
                    $("#contact-phone-err").hide();
                });
            }
            if(formData.set_new_password==''){
                allowsubmit=false;
                $('#contact-password-err').show();
                $(".password").click(function() {
                    $("#contact-password-err").hide();
                });
            }
           
            return allowsubmit;
        }
        catch(e){   
            var err = e.toString();
            frappe.call({
                method:'ecommerce_business_store.ecommerce_business_store.api.error_log',
                args:{

                    'err':err,     
                    'title':"cmswebsite.cmswebsite.templates.pages.contact_enquiry.validate_fields"          
                },
                callback:function(data){
                }
            })    
        }
    }

</script>