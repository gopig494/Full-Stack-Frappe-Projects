// function reload() { 
//     cur_frm.reload_doc() 
// }

function edit_row(attribute,req,ctype,order,chart,send){
    // frappe.msgprint("gdafgfdg")

	let rec = new frappe.ui.Dialog({
    title: 'Enter details',
    fields: [    
        {
            label: 'Product Attribute',
            fieldname: 'product_attribute',
            fieldtype: 'Data'
        },
        {
            label: 'Is Required',
            fieldname: 'is_required',
            fieldtype: 'Select',
            options : ['Yes', 'No'],
            default: 'Yes',
        },
        {
            label: 'Control Type',
            fieldname: 'control_type',
           fieldtype: 'Select',
            options : ['Dropdown List', 'Radio Button List', 'Check Box List'],
             default: 'Radio Button List',
        },
        {
            label: '',
            fieldname: 'column_break',
            fieldtype: 'Column Break'
        },
        {
            label: 'Display Order',
            fieldname: 'display_order',
            fieldtype: 'Data'
        },
        {
            label: 'Size Chart',
            fieldname: 'size_chart',
            fieldtype: 'Data'      
        },
    ],
    primary_action_label: 'Update',
    primary_action(values) {
   //       if (cur_frm.doc.product_variant){
   //     cur_frm.doc.product_variant.push({
   //      "product_attribute":rec.product_attribute,
   //      "is_required":rec.is_required,
   //      "control_type":rec.control_type,
   //      "display_order":rec.display_order,
   //      "size_chart":rec.size_chart
   //      })
   // }
       // frappe.db.after_insert('Prduct Info New',"product_variant":[{
       //  "product_attribute":rec.product_attribute,
       //  "is_required":rec.is_required,
       //  "control_type":rec.control_type,
       //  "display_order":rec.display_order,
       //  "size_chart":rec.size_chart
       //  }])

        frappe.db.set_value("Product Variants info",send,
        {
        "product_attribute":values.product_attribute,
        "is_required":values.is_required,
        "control_type":values.control_type,
        "display_order":values.display_order,
        "size_chart":values.size_chart        
     })

        console.log(values);

        cur_frm.reload_doc()

        // frappe.msgprint("Updated Successfully");
        

        rec.hide();

        

        

    }
});
    console.log(send);
    rec.fields_dict.product_attribute.set_value(attribute);
    console.log(attribute)
    rec.fields_dict.is_required.set_value(req);
    console.log(req)
    rec.fields_dict.display_order.set_value(order);
    rec.fields_dict.control_type.set_value(ctype);
    rec.fields_dict.size_chart.set_value(chart);
    console.log(chart)


rec.show();

}


// function Delete_rec(ab){
//     // cur_frm.doc.delete("Product Variants info")
//     console.log(ab);
//     var products = ($(ab).attr("data-id"))
//     console.log(products);
//     $.ajax({
//             headers: { "X-Frappe-CSRF-Token": frappe.csrf_token },
//             method:'Delete',
//             url:'http://192.168.0.156:8000/api/resource/Product Variants info/'+products,
        
//         success:function(data){console.log("delete"+data);
//         cur_frm.reload_doc()
//         },
//         error:function(err){console.log(err);},
//         });
//     // frappe.msgprint("Deleted Succesfully")
// }

function Delete_rec(ab) {
    function Delete() {
        var product = confirm("Are you sure to Delete this document?");
        if (product) {
            var rec = ($(ab).attr("data-id"))
            frappe.call({
                method: 'employee_management.employee_management.doctype.product_info_new.product_info_new.delete_rec',
                args: {
                    "products": rec
                },
                async: false,
                callback: function (data) {

                    frappe.msgprint("Deleted Succesfully")

                }
            });
            reload()
        }
        else {
            return false;
        }
    }

    Delete()

}

function Editoptions(){

    // frappe.msgprint("Edit Options");


    let rec = new frappe.ui.Dialog({
    title: 'Attribute options',
    fields: [    
        {
            label: 'Option',
            fieldname: 'option',
            fieldtype: 'Data'
        },
        {
            label: 'Display Order',
            fieldname: 'display_order',
            fieldtype: 'Data'
        },
        {
            label: 'Price Adjustment',
            fieldname: 'price_adjustment',
            fieldtype: 'Float',
            // options : ['Yes', 'No'],
            // default: 'Yes',
        },
        {
            label: 'Weight Adjustment',
            fieldname: 'weight_adjustment',
           fieldtype: 'Data',
            // options : ['Dropdown List', 'Radio Button List', 'Check Box List'],
            //  default: 'Radio Button List',
        },
           {
            label: 'Color',
            fieldname: 'color',
            fieldtype: 'Color'
        },
        {
            label: '',
            fieldname: 'column_break',
            fieldtype: 'Column Break'
        },
        {
            label: 'Product Title',
            fieldname: 'product_title',
            fieldtype: 'Data'
        },
        // {
        //     label: 'Is Pre Selected',
        //     fieldname: 'is_pre_selected',
        //     fieldtype: 'Check',      
        // },
        // {
        //     label: 'Disabled',
        //     fieldname: 'disabled',
        //     fieldtype: 'Check',      
        // },
        {
            label: 'Upload Video',
            fieldname: 'upload_video',
            fieldtype: 'Button',      
        },
        {
            label: 'Add / Edit Image',
            fieldname: 'add_edit',
            fieldtype: 'Button',      
        },
        {
            label: 'Add Video',
            fieldname: 'Add_video',
            fieldtype: 'Button',      
        }
    ],
    primary_action_label: '',
    primary_action(values) {  
 

        console.log(values);

        rec.hide();
   }
});

rec.show();

}



