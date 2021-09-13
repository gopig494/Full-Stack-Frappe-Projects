function insert() {
    let fname = $('input[name="fname"]').val();
    let lname = $('input[name="lname"]').val();
    let email = $('input[name="email"]').val();
    let gender = $('input[name="gender"]').val();
    let mnumber = $('input[name="mnumber"]').val();
    let password = $('input[name="password"]').val();
    let conpass = $('input[name="confirmpassword"]').val();

    if (document.getElementById('male').checked == true) {
        gender = "Male";
    } else {
        gender = "Female";
    }

    // console.log(fname)
    // console.log(lname)
    // console.log(email)
    // console.log(gender)
    // console.log(mnumber)
    // console.log(password)



    // var ph = document.getElementById('number')
    // var mail = document.getElementById('mail')
    // console.log(ph.value)
    // console.log(mail.value)



    //email validation start
    function EmailValidation(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            frappe.throw({
                title: __('Wrong Email'),
                indicator: 'green',
                message: __('Sorry! an invalid email!')
            });
            return false;
        } else {
            return true;
        }
    }
    //email validation end
    //phone number validation stsrt
    function phonenumber(mnumber) {
        var regEx = /^\d{10}$/;
        if (mnumber.match(regEx)) {
            return true;
        }
        else {
            frappe.throw({
                title: __('Wrong Phone Number'),
                indicator: 'red',
                message: __('wrong number')
            });
            return false;
        }
    }

    //phone number validation end
    //password check stsrt
    function passwordCheck(a, b) {
        console.log("Pass")
        if (a) {
            if (a == b) {
                return true
            } else {
                frappe.throw({
                    title: __('Password Mismatch'),
                    indicator: 'red',
                    message: __('Password Mismatch')
                });
                return false
            }
        }

        else {
            frappe.throw({
                title: __("Password Can't Be Empty"),
                indicator: 'red',
                message: __("Password Can't Be Empty")
            });
            return false

        }
    }


    var emailvalidfun = EmailValidation(email)
    var pnovalfun = phonenumber(mnumber)
    var passvalfun = passwordCheck(password, conpass)

    // var db = dbexist(email, mnumber)
    // console.log(emailvalidfun)
    // console.log(pnovalfun)
    // console.log(passvalfun)

    if (passvalfun == true && emailvalidfun == true && pnovalfun == true) {
        frappe.call({
            method: 'employee_management.employee_management.doctype.customer_registration_g.customer_registration_g.info_insert',
            args: {
                fname: fname,
                lname: lname,
                email: email,
                gender: gender,
                mnumber: mnumber,
                password: password,
            },
            callback: function (r) {

                alert(r.message)
            }
        });
    }
}
