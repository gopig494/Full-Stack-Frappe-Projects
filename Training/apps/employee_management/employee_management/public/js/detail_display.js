function ref() { cur_frm.reload_doc() }

function abc(at, bt, ct, dt, et, ft, gt) {
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
            console.log(values);
            // frm.set_value({
            //     product_variant_list: [{
            //         "name": gt,
            //         "product_attribute": values.product_attribute,
            //         "is_required": values.is_required,
            //         "display_order": values.display_order,
            //         "attribute_name": values.attribute_name,
            //         "control_type": values.control_type,
            //         "size_chart": values.size_chart
            //     }]
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
            //         "name": gt,
            // "product_attribute": values.product_attribute,
            // "is_required": values.is_required,
            // "display_order": values.display_order,
            // "attribute_name": values.attribute_name,
            // "control_type": values.control_type,
            // "size_chart": values.size_chart

            //     }]
            // })
            frappe.db.set_value('Product Variant Gopi', gt, {
                "product_attribute": values.product_attribute,
                "is_required": values.is_required,
                "display_order": values.display_order,
                "attribute_name": values.attribute_name,
                "control_type": values.control_type,
                "size_chart": values.size_chart

            })



            frappe.msgprint("Saved Successfully");

            d.hide();
            ref()
        }

    });

    d.fields_dict.product_attribute.set_value(at);
    d.fields_dict.is_required.set_value(bt);
    d.fields_dict.display_order.set_value(ct);
    d.fields_dict.attribute_name.set_value(dt);
    d.fields_dict.control_type.set_value(et);
    d.fields_dict.size_chart.set_value(ft);

    d.show();

}

function Del(va) {
    function ConfirmDelete() {
        var x = confirm("Are you sure you want to delete?");
        if (x) {
            var i = ($(va).attr("data-id"))
            frappe.call({
                method: 'employee_management.employee_management.doctype.product_info_gopi.product_info_gopi.del_record',
                args: {
                    "idd": i
                },
                async: false,
                callback: function (data) {

                    frappe.msgprint("Record Deleted Succesfully")


                }
            });
            ref()
        }
        else {
            return false;
        }
    }

    ConfirmDelete()

}