frappe.ui.form.on('Product Info New', {
    refresh: function(frm) {
        var rec = frappe.get_doc("Product Info New",cur_frm.doc.name)
       console.log(rec)
        $(cur_frm.fields_dict['new_record'].wrapper).html(frappe.render_template("product", { variant: rec.product_variant}));
        console.log("New");
    },
    add_new_attribute:function(){
       
        d.show()
    }

});

    let d = new frappe.ui.Dialog({
    title: 'Product details',
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
            fieldtype: 'Data',
            value: cur_frm.doc.valuation_rate,
        },
        {
            label: 'Size Chart',
            fieldname: 'size_chart',
            fieldtype: 'Data'      
        },
    ],
            primary_action_label: 'Save',
            primary_action(rec) {
   if (cur_frm.doc.product_variant){
       cur_frm.doc.product_variant.push({
        "product_attribute":rec.product_attribute,
        "is_required":rec.is_required,
        "control_type":rec.control_type,
        "display_order":rec.display_order,
        "size_chart":rec.size_chart
        })
   }
   else{
       cur_frm.set_value({"product_variant":[{
        "product_attribute":rec.product_attribute,
        "is_required":rec.is_required,
        "control_type":rec.control_type,
        "display_order":rec.display_order,
        "size_chart":rec.size_chart
        }]
     })
   }
    

        d.hide();

        frappe.msgprint("Insert Successfully..")

        cur_frm.save();                
        }

    
 });
    