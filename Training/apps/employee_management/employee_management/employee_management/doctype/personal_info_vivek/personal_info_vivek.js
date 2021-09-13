// // Copyright (c) 2021, Gopi and contributors
// // For license information, please see license.txt
// frappe.ui.form.on('Personal Info Vivek', {
// 	// refresh: function(frm) {

// 	// }
// 	// full_name = self.first_name + self.last_name
// 	// 		frappe.db.set_value("Personal Info Vivek",self.name,"full_name",full_name)
// 	email:function(){
// 		IsEmail(cur_frm.doc.email)
// 	},
// 	phone_number:function(){
// 		phonenumber(cur_frm.doc.phone_number)
// 	}

// });
// function phonenumber(inputtxt) {
//     var regEx = /^\d{10}$/;
//         if(inputtxt.match(regEx)){
//                 return true;
//         }
//         else{
//              frappe.throw({
//                 title: __('Wrong Phone Number'),
//                 indicator: 'red',
//                 message: __('wrong number')
//             });
//         return false;
//         }
//     }
//     function IsEmail(email) {
//         var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//         if(!regex.test(email)) {
//              frappe.throw({
//                 title: __('Wrong Email'),
//                 indicator: 'green',
//                 message: __('Sorry! an invalid email!')
//             });
//             return false;
//         }else{
//             return true;
//         }
//     }