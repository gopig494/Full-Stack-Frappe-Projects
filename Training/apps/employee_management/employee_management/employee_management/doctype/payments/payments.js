// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Payments', {
	refresh:function(frm){
        frm.trigger('sample');
        frm.trigger('sample2');
        frm.trigger('sample3');
 //         var put_data = {
 //                         // 
 //                        // "order_item_id":"Aj123",
 //                        // "order_item":"dress watch",
 //                        // "post_date":"25-08-2021",
 //                        // "price":"2000"
 //                        // // "docstatus":1 ,
 //                        "ref":[{"total":"570"}]
                        
                        
 //                        };

 //        $.ajax({
 //            headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
 //            method:'PUT',
 //            url:'http://192.168.0.156:8000/api/resource/Payments/n',
 //            dataType: 'json',
 //            data:JSON.stringify(put_data),
        
 //        success:function(data){console.log("sucess put"+data)},
 //        error:function(err){console.log(err);},
 //        });
		// frappe.call({
  //               method: 'employee_management.employee_management.doctype.payments.payments.get_child',
  //               args: {
  //                   'payments': cur_frm.doc.name
  //               },

  //               async: false,
  //               callback: function(data) {
  //               	console.log(data);
  //               }

                    
  //           });
    },
    sample(frm){
        frm.set_query('type','ref',() =>{
            return{
                filters:{
                    type: 'Orderss'
                }
            }

        })

        },

    sample2:function(frm){
       
          if(!frm.is_new()){
              frm.add_custom_button('click',() =>{
                  frm.set_value("paid_amount","120")
              })

          }
    }

   

	
      
     
   
});



