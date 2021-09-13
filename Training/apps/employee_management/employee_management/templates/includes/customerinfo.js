function insert(){
	let firstname =  $('#firstName').val();
	let lastname =   $('#lastName').val();	
	let emaill =   $('#emaill').val();	
	let phoneno =  $('#phoneNumber').val();
	let password =   $('#Password').val();
	let confpassword =   $('#ConfirmPassword').val();

	
	console.log(firstname)

       // //radio button value finding
       //  if (document.getElementById('Male').checked == true) {
       //      redioAnswer = "Male";
       //  } else {
       //      redioAnswer = "Female";
       //  }
         
        
        var PwdValid = check_password(password, confpassword)
        var Emailvalid = check_email(emaill)
        var phonenuvalid = check_phonenumber(phoneno)
      


      
    function check_email(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
             frappe.throw({
                title: __('Wrong Email'),
                indicator: 'green',
                message: __('Sorry! It is an invalid email!')
            });
            return false;
        }else{
            return true;
        }
    }
    //email validation end
    //phone number validation stsrt
    function check_phonenumber(inputtext) {
    var regEx = /^\d{10}$/;
        if(inputtext.match(regEx)){
                return true;
        }
        else{
             frappe.throw({
                title: __('Wrong Phone Number'),
                indicator: 'green',
                message: __('wrong phone number')
            });
        return false;
        }
    }

    //phone number validation end
    //password check stsrt
    function check_password(a, b) {
        if(a && b){
        if (a == b) {
            return true
        } else {
            frappe.throw({
                title: __('Password Mismatch'),
                indicator: 'green',
                message: __('Password Mismatch')
            });
            return false
        }
    }else{
        frappe.throw({
                title: __('Please Enter Password'),
                indicator: 'green',
                message: __('Please Enter Password')
            });
    }
    }    

        if (PwdValid == true && Emailvalid == true && phonenuvalid == true) {
        console.log("Diensh")
	frappe.call({
			method: 'employee_management.employee_management.doctype.customer_registration_info.customer_registration_info.insert_rec',
			args: {
				firstname: firstname,
				lastname: lastname,
				emaill:emaill,
				phoneno:phoneno,
				password:password,
				
			},
			callback: function (r) {
                    console.log(r.message)
                }
			
		});         
 }
}
