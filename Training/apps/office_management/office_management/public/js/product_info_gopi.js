

frappe.ui.form.on('Product Info Gopi', {
    add_new_attribute: function (frm) {

        let d = new frappe.ui.Dialog({
            title: 'Enter details',
            fields: [
                {
                    label: 'Product Attribute',
                    fieldname: 'product_attribute',
                    fieldtype: 'Data'
                }, {

                    label: "Is Required",
                    fieldname: "is_required",
                    fieldtype: "Select",
                    options: ["Yes", "No"]
                }, {

                    label: "Display Order",
                    fieldname: "display_order",
                    fieldtype: "Int",
                    // options: ["Material Receipt", "Material Transfer"]
                },
                {

                    label: "Attribute Name",
                    fieldname: "attribute_name",
                    fieldtype: "Data",

                },
                {

                    label: "Control Type",
                    fieldname: "control_type",
                    fieldtype: "Select",
                    options: ["Redio Button List", "Drop Down List", "Check Box List"]

                },
                {

                    label: "Size Chart",
                    fieldname: "size_chart",
                    fieldtype: "Int",

                }
            ],
            primary_action_label: 'Save',
            primary_action(values) {
                console.log(typeof values.size_chart);
                console.log(values);
                if (typeof values.size_chart == 'number') {

                    if (cur_frm.doc.product_variant_list) {
                        cur_frm.doc.product_variant_list.push({
                            "product_attribute": values.product_attribute,
                            "is_required": values.is_required,
                            "display_order": values.display_order,
                            "attribute_name": values.attribute_name,
                            "control_type": values.control_type,
                            "size_chart": values.size_chart
                        })
                    }
                    else {

                        frm.set_value({
                            product_variant_list: [{
                                "product_attribute": values.product_attribute,
                                "is_required": values.is_required,
                                "display_order": values.display_order,
                                "attribute_name": values.attribute_name,
                                "control_type": values.control_type,
                                "size_chart": values.size_chart
                            }]
                            // frm.doc.product_variant_list.push({
                            //     "product_attribute": values.product_attribute,
                            //     "is_required": values.is_required,
                            //     "display_order": values.display_order,
                            //     "attribute_name": values.attribute_name,
                            //     "control_type": values.control_type,
                            //     "size_chart": values.size_chart

                            // frappe.db.insert({
                            //     doctype: 'Product Info Gopi',
                            //     product_variant_list: [{
                            //         "product_attribute": values.product_attribute,
                            //         "is_required": values.is_required,
                            //         "display_order": values.display_order,
                            //         "attribute_name": values.attribute_name,
                            //         "control_type": values.control_type,
                            //         "size_chart": values.size_chart

                            // }]
                        }).then(doc => {
                            console.log(doc);
                            // $(cur_frm.fields_dict['detail_table'].wrapper).html(frappe.render_template("detail_display", { display: values }));

                        })
                    }

                    frappe.msgprint("Click The Button Save For Save The Data's");
                    d.hide();
                }
                else {
                    frappe.throw("Enter Size Chart in Digits")

                }
            }


        });


        d.show();
    },
    refresh: function (frm) {
        console.log(frm.doc.name)
        frappe.call({
            method: 'employee_management.employee_management.doctype.product_info_gopi.product_info_gopi.get_record',
            args: {
                "idd": frm.doc.name
            },
            async: false,
            callback: function (data) {

                if (data.message) {

                    console.log(data.message)
                    $(cur_frm.fields_dict['detail_table'].wrapper).html(frappe.render_template("detail_display", { display: data.message }));
                    // $(d.fields_dict['payment_det'].wrapper).html(frappe.render_template("customer", { payments: data.message, button_enable: 0, orderss: cur_frm.doc.name }));


                    // else{
                    //     $(frm.fields_dict['expense_html'].wrapper).html(frappe.render_template("expense_list", { payments: data.message,button_enable:1,order:frm.doc.name}));
                    // }
                }
            }
        });
    }
});


function edit(frm) {
    console.log("I Am Working")

}