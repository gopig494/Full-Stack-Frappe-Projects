// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Orderss', {
    validate:function(frm){
        if (frm.doc.product_price > 100){
            frm.doc.product_price=50

        }
    },


 refresh:function(frm){
     frm.set_df_property('customer_name', 'read_only', !frm.is_new());
     //                                                               
     // $.ajax({
     //        headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
     //        method:'GET',
     //        url:'http://192.168.0.156:8000/api/resource/Orderss',
     //        // dataType:json
        
     //    success:function(data){console.log(data);},
     //    error:function(err){console.log(err);},
     //    });

     //    // // Api Post Data
     //        var post_data = {
     //                   "customer_name":"fff",
                       
     //                    "product_name":"wa",
     //                     // "docstatus":0 ,
     //                     "sam":[{"payment_date":"2021-08-28"}],
     //                    }
        
     //    $.ajax({
     //        headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
     //        method:'POST',
     //        url:'http://192.168.0.156:8000/api/resource/Orderss',
     //        dataType: 'json',
     //        data:JSON.stringify(post_data),
        
     //    success:function(data){console.log("sucess insert"+data);},
     //    error:function(err){console.log(err);},
     //    });
        // var put_data = {
        //                 "customer_name":"some",
        //                 // "order_item_id":"Aj123",
        //                 // "order_item":"dress watch",
        //                 // "post_date":"25-08-2021",
        //                 // "price":"2000"
        //                 // // "docstatus":1 ,
        //                 "sam":[{"payment_date":"2021-08-28"}]
                        
                        
        //                 };

     //    // $.ajax({
     //    //     headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
     //    //     method:'PUT',
     //    //     url:'http://192.168.0.156:8000/api/resource/Orderss/mow',
     //    //     dataType: 'json',
     //    //     data:JSON.stringify(put_data),
        
     //    // success:function(data){console.log("sucess put"+data)},
     //    // error:function(err){console.log(err);},
     //    // });
     //    var  name= 'bcca16b214'
                       
     //                    // "order_item_id":"Aj123",
     //                    // "order_item":"dress watch",
     //                    // "post_date":"25-08-2021",
     //                    // "price":"2000"
     //                    // // "docstatus":1 ,
                        

       
     //    $.ajax({
     //        headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
     //        method:'DELETE',
     //        url:'http://192.168.0.156:8000/api/resource/Orderss/h-1',
     //        dataType: 'json',
     //        data:JSON.stringify(name),
     //        // dataType: 'json',

           
            
            
            
            
            
            
            
        
     //    success:function(data){console.log("sucess delete"+data);},
     //    error:function(err){console.log(err);},
     //    });
                  
     




//      $.ajax({
//          headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
//             // method:'GET',
//             // url:'http://192.168.0.156:8000/api/resource/Orderss',
//             // dataType:json
        
//         // success:function(data){console.log(data.message);},
//         // error:function(err){console.log(err);},

//          url : ' /api/resource/Orderss/fff',
//          type : 'DELETE',
//          data:{
//              "name": "fff" 


//          },
//          request = $.delete(url, data)
       
        
   
       
// });
 }
 
});

//     refresh:function(frm){
//        if (cur_frm.doc.docstatus == 1){
//             frm.add_custom_button(__('Make Payment'), function(){
//                 frappe.model.open_mapped_doc({
//                     method: "employee_management.employee_management.doctype.orderss.orderss.new_entry",
//                     frm: cur_frm
//                 });
            
//             });
        
//         }
//     },
    
    
	 
   prompt:function(frm){
       let d = new frappe.ui.Dialog({
           title:"Payment details",
           fields:[
           {
               label:"Payment_det",
               fieldname:"payment_det",
               fieldtype:"HTML"

           }
           ]


       })
       $(d.fields_dict['payment_det'].wrapper).html(frappe.render_template("customer", { payments: "", button_enable: 0, orderss: cur_frm.doc.name }));
       frappe.call({
                method: 'employee_management.employee_management.doctype.orderss.orderss.get_payments',
                args: {
                    'orderss': cur_frm.doc.name
                },

                async: false,
                callback: function(data) {

                    if (data.message) {
                        if (data.message.length > 0) {
                            $(d.fields_dict['payment_det'].wrapper).html(frappe.render_template("customer", { payments: data.message, button_enable: 0, orderss: cur_frm.doc.name }));
                        }

                        // else{
                        //     $(frm.fields_dict['expense_html'].wrapper).html(frappe.render_template("expense_list", { payments: data.message,button_enable:1,order:frm.doc.name}));
                        // }
                    }
                }
            });

       
       d.show();
   }
   

// frappe.ui.form.on('Child', {
    
//    form_render(frm, cdt, cdn){
//        var d = locals[cdt][cdn]

       
       
       
//         frappe.call({
//                 method: 'employee_management.employee_management.doctype.orderss.orderss.get_payments',
//                 args: {
//                     'orderss': cur_frm.doc.name

//                 },


//                 async: false,

//                 callback: function(data) {

                    


//                     if (data.message) {
//                         if (data.message.length > 0) {

//                             let sam = cur_frm.fields_dict["sam"].grid.grid_rows_by_docname["30fd17c489"].grid_form.fields_dict['pay'].$wrapper
//        let tab_html = $(`<table class="table table-bordered" style="cursor:pointer; margin:0px;">
//                 <thead>
//                     <tr>
//                         <th style="width: 20%;">${__("Payment id")}</th>
//                         <th style="width: 20%;">${__("Payment_date")}</th>
//                         <th style="width: 20%;">${__("Total")}</th>
//                         <th style="width: 20%;">${__("Paid amount")}</th>
//                         <th style="width: 20%;">${__("Outstanding amount")}</th>
                        
//                     </tr>
//                 </thead>
//                 <tbody></tbody>
//             </table>`).appendTo(sam);
       

//        let mow = data.message
//        console.log(mow);


       
//        mow.forEach(function(m){
          
//                 let payment_id = m.name;
//                 let payment_date = m.payment_date;
//                 let total = m.total;
//                 let paid_amount = m.paid_amount;
//                 let outstanding_amount = m.outstanding;


//                 let row = $(`<tr>
//                         <td><a href="#Form/Payments/${__(payment_id)}">${__(payment_id)}</a></td>
//                         <td>${__(payment_date)}</td>
//                         <td>${__(total)}</td>
//                         <td>${__(paid_amount)}</td>
//                         <td>${__(outstanding_amount)}</td>
//                         <td><button class="btn btn-danger btn-xs"><span class="fa fa-times"></span></button></td>
//                     </tr>`);
//                 tab_html.find('tbody').append(row);

//        })
       
       
      


       
       

//                         }

//                         // else{
//                         //     $(frm.fields_dict['expense_html'].wrapper).html(frappe.render_template("expense_list", { payments: data.message,button_enable:1,order:frm.doc.name}));
//                         // }
//                     }

                    
//                 }


//             });
        




       

//    }




    

// });





// refresh:function(frm){
//         if (frm.doc.docstatus == 1){
//             if (frm.doc.order_status=="Placed"){

//                 frm.add_custom_button(__('Make Payment'), function(){

//                        var post_data = {
//                                "customer_name":cur_frm.doc.customer_name,
//                                "payment_type":"Pay",
//                                "payment_mode":"Cash",
//                                "paid_status":"Paid",
//                                "ref":[{"type":"Orderb","namee":cur_frm.doc.name}]

//                            }
        
//         $.ajax({
//             headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
//             method:'POST',
//             url:'http://192.168.0.156:8000/api/resource/Payment entryb',
//             dataType: 'json',
//             data:JSON.stringify(post_data),
        
//         success:function(data){console.log("sucess insert"+data);},
//         error:function(err){console.log(err);},
//         });


         
//             });
        
        
   
//     }
// }
// }