// Copyright (c) 2021, Gopi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Product Detail GG', {
	refresh: function (frm) {
		if (!frm.is_new()) {
			frm.add_custom_button(__('Update'), function () {
				let d = new frappe.ui.Dialog({
					title: 'Enter details',
					fields: [
						{
							label: 'Stock Qty',
							fieldname: 'stock_qty',
							fieldtype: 'Int'
						}, {

							label: "Valuation Rate",
							fieldname: "valuation_rate",
							fieldtype: "Currency",
						}, {

							label: "Purpose",
							fieldname: "purpose",
							fieldtype: "Select",
							options: ["Material Receipt", "Material Transfer"]
						},
						{

							label: "Date",
							fieldname: "date",
							fieldtype: "Date",

						}
					],
					primary_action_label: 'Submit',
					primary_action(values) {
						console.log(values);
						var abcd = values.stock_qty * values.valuation_rate
						doc = frappe.get_doc({
							"doctype": "Stock Entry GG",
							"stock_date": frm.doc.date,
							"note": frm.doc.description,
							"purpose": values.purpose,
							"docstatus": 1,
							"detail": [{
								"product_id": frm.doc.product_id,
								"product_name": frm.doc.product_name,
								"product_price": values.valuation_rate,
								"product_quantity": values.stock_qty,
								"total_amount": abcd

							}]

						})
						doc.insert()

						d.hide();
					}
				});

				d.show();
			})

		}

	}, before_save(frm) {
		if (frm.doc.is_stock_item) {
			frm.set_df_property('opening_stock', 'reqd', 1)
			frm.set_df_property('valuation_rate', 'reqd', 1)
		}

	}
});
