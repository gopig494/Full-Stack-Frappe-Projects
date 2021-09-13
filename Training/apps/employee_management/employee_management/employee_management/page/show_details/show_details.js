frappe.pages['show-details'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Show Details',
		single_column: true
	});

	$(frappe.render_template("show_details")).appendTo(page.body.addClass("listing"));

	page.add_inner_button('Update Posts', () => updatemenuitems())
}


var changedRows = [];
var dt;

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
	try {
		decimalCount = Math.abs(decimalCount);
		decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

		const negativeSign = amount < 0 ? "-" : "";

		let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
		let j = (i.length > 3) ? i.length % 3 : 0;

		return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
	} catch (e) {
		console.log(e)
	}
};

frappe.pages['show-details'].refresh = function (wrapper) {
	// location.reload();

	$('.page-title .title-text').text('Show Details')



	frappe.call({
		method: 'employee_management.employee_management.doctype.show_detail.show_detail.get_product',
		args: { dtype: "Product" },
		callback: function (r) {
			console.log(r.message)
			var items = r.message
			dt = new DataTable('#listing', {
				columns: [
					{ name: 'Id', width: 1, editable: false },
					{ name: 'Product', width: 2, editable: true },
					{ name: 'SKU', width: 1, editable: true },
					{ name: 'Price', width: 1, editable: true, format: value => formatMoney(value) },
					{ name: 'Old Price', width: 1, editable: true, format: value => formatMoney(value) },
					{ name: 'Stock', width: 1, editable: true, align: "left" },
					{ name: 'Active', width: 1, editable: true, align: "left" },
					{ name: 'Featured Product', width: 1, editable: true, align: "left" },
					{ name: 'Category', width: 1, editable: true, align: "left" },
					{ name: 'Image', width: 1, editable: true, align: "left" },
					{ name: 'Inventory', width: 1, editable: true, align: "left" },
					// { name: 'Categories', width: 2, align: "left", format: value => `<button class="btn-primary" onclick="get_category('${value}')">Edit Category</button>` },
					// { name: 'Image', width: 2, align: "left", format: value => `<button class="btn-primary" onclick="get_image('${value}')">Add / Edit Image</button>` },
					{ name: 'Update', width: 2, align: "left", format: value => `<button class="btn-primary" onclick="updatemenuitems()">Update</button>` }
				],
				data: r.message,
				inlineFilters: true,
				layout: 'ratio',
				noDataMessage: "No Data Found",
				dropdownButton: '▼',
				sortIndicator: {
					asc: '↑',
					desc: '↓',
					none: ''
				},
				getEditor(colIndex, rowIndex, value, parent, column, row, data) {
					if (jQuery.inArray(rowIndex, changedRows) == -1) {
						changedRows.push(rowIndex);
					}
					if (colIndex == 4 && colIndex == 5) {
						const $input = document.createElement('input');
						$input.type = 'number';
						parent.appendChild($input);

						return {
							// called when cell is being edited
							initValue(value) {
								$input.focus();
								$input.value = value;
							},
							// called when cell value is set
							setValue(value) {

								$input.value = value;
							},
							// value to show in cell
							getValue() {
								return format($input.value);
							}
						}
					}
					// if (colIndex == 7) {
					//     const $input = document.createElement('select');
					//     var option1 = new Option("Track Inventory", "Track Inventory");
					//     var option2 = new Option("Dont Track Inventory", "Dont Track Inventory");
					//     var option3 = new Option("Track Inventory By Product Attributes", "Track Inventory By Product Attributes");
					//     if (value == "Track Inventory") {
					//         option1.setAttribute("selected", "selected");
					//     }
					//     if (value == "Dont Track Inventory") {
					//         option2.setAttribute("selected", "selected");
					//     }
					//     if (value == "Track Inventory By Product Attributes") {
					//         option3.setAttribute("selected", "selected");
					//     }
					//     var drpClass = "InventoryDrp-";
					//     var changeName = 'InventoryDropUpdate';

					//     $input.append(option1);
					//     $input.append(option2);
					//     $input.append(option3);
					//     $input.setAttribute("id", drpClass + rowIndex);
					//     $input.setAttribute("style", 'width:100%;height:26px');
					//     $input.setAttribute("onchange", changeName + '(' + rowIndex + ')');
					//     parent.appendChild($input);
					//     return {
					//         // called when cell is being edited
					//         initValue(value) {
					//             $input.focus();
					//             $input.value = value;
					//         },
					//         // called when cell value is set
					//         setValue(value) {
					//             $input.value = value;
					//         },
					//         // value to show in cell
					//         getValue() {
					//             return format($input.value);
					//         }
					//     }
					//     return {
					//         // called when cell is being edited
					//         initValue(value) {
					//             $input.focus();
					//             $input.value = value;
					//         },
					//         // called when cell value is set
					//         setValue(value) {

					//             $input.value = value;
					//         },
					//         // value to show in cell
					//         getValue() {
					//             return format($input.value);
					//         }
					//     }
					// }
					// if (colIndex == 8 || colIndex == 9) {

					//     const $input = document.createElement('select');
					//     var option1 = new Option("Yes", "Yes");
					//     var option2 = new Option("No", "No");
					//     if (value == "Yes") {
					//         option1.setAttribute("selected", "selected");
					//     }
					//     if (value == "No") {
					//         option2.setAttribute("selected", "selected");
					//     }
					//     var drpClass = "ActiveDrp-";
					//     var changeName = 'ActiveDropUpdate';
					//     if (colIndex == 9) {
					//         drpClass = "RecomDrp-";
					//         changeName = 'RecomDropUpdate';
					//     }
					//     $input.append(option1);
					//     $input.append(option2);
					//     $input.setAttribute("id", drpClass + rowIndex);
					//     $input.setAttribute("style", 'width:100%;height:26px');
					//     $input.setAttribute("onchange", changeName + '(' + rowIndex + ')');
					//     parent.appendChild($input);
					//     return {
					//         // called when cell is being edited
					//         initValue(value) {
					//             $input.focus();
					//             $input.value = value;
					//         },
					//         // called when cell value is set
					//         setValue(value) {
					//             $input.value = value;
					//         },
					//         // value to show in cell
					//         getValue() {
					//             return format($input.value);
					//         }
					//     }
					// }

					// console.log(dt.datamanager.getRows());
				},

				events: {
					onRemoveColumn(column) {
						console.log(column.id)
					},
					onSwitchColumn(column1, column2) { },
					onSortColumn(column) { },
					onCheckRow(row) { }
				},
			});
		},
	});


}

function ActiveDropUpdate(rowIndex) {
	$(".dt-cell--col-8").removeClass("dt-cell--focus dt-cell--editing");
	dt.cellmanager.submitEditing();
	dt.cellmanager.deactivateEditing();
	// submitEditing();
	//    deactivateEditing();
	// $(".dt-row-"+rowIndex).find(".dt-cell__content--col-4").text($("#ActiveDrp-"+rowIndex).val());
	// $(".dt-cell--col-4").removeClass("dt-cell--focus dt-cell--editing");
	// $(".dt-cell__edit--col-4 .dt-input").val($("#ActiveDrp-"+rowIndex).val());

}
function InventoryDropUpdate(rowIndex) {
	$(".dt-cell--col-7").removeClass("dt-cell--focus dt-cell--editing");
	dt.cellmanager.submitEditing();
	dt.cellmanager.deactivateEditing();
	// submitEditing();
	//    deactivateEditing();
	// $(".dt-row-"+rowIndex).find(".dt-cell__content--col-4").text($("#ActiveDrp-"+rowIndex).val());
	// $(".dt-cell--col-4").removeClass("dt-cell--focus dt-cell--editing");
	// $(".dt-cell__edit--col-4 .dt-input").val($("#ActiveDrp-"+rowIndex).val());

}

function RecomDropUpdate(rowIndex) {
	$(".dt-cell--col-9").removeClass("dt-cell--focus dt-cell--editing");
	dt.cellmanager.submitEditing();
	dt.cellmanager.deactivateEditing();
	// $(".dt-row-"+rowIndex).find(".dt-cell__content--col-5").text($("#RecomDrp-"+rowIndex).val());
	// $(".dt-cell--col-5").removeClass("dt-cell--focus dt-cell--editing");
}

function updatemenuitems() {
	var alldata = dt.datamanager.getRows();

	var datas = [];
	for (var i = 0; i < changedRows.length; i++) {
		var obj = {
			'data': alldata[parseInt(changedRows[i])],
			'rowIndex': parseInt(changedRows[i])
		}
		datas.push(obj);
	}
	for (var i = 0; i < datas.length; i++) {

		var item = datas[i];
		var itemid = item.data[1].content;
		var itemTitle = item.data[2].content;
		var itemSKU = item.data[3].content;
		var itemPrice = item.data[4].content;
		var itemOldPrice = item.data[5].content;
		var itemStock = item.data[6].content;
		//var itemInventoryMethod = item.data[7].content;
		var itemActive = item.data[7].content;
		var itemFeaturedProduct = item.data[8].content;
		var Category = item.data[9].content;
		var Image = item.data[10].content;
		var inventory = item.data[11].content;

		console.log(item);
		frappe.call({
			method: 'employee_management.employee_management.doctype.show_detail.show_detail.update_product',
			args: {
				name: itemid,
				title: itemTitle,
				sku: itemSKU,
				price: itemPrice,
				oldprice: itemOldPrice,
				stock: itemStock,
				active: itemActive,
				featureproduct: itemFeaturedProduct,
				cat: Category,
				img: Image,
				inn: inventory
			},
			callback: function (r) {
				if (i == datas.length) {
					frappe.msgprint("Successfully")

				}
			}
			// console.log("I Am Working")
		});

	}
	// frappe.msgprint("Successfully updated");

	changedRows = [];
}











// frappe.ui.form.on('Order DetailG', {
// 	refresh(frm) {
// 		if (cur_frm.doc.docstatus == 1 && cur_frm.doc.payment_status == "Unpaid") {
// 			frm.add_custom_button(__('Make Payment'), function () {

// 				frappe.msgprint("Paid Successfully")
// 			})
// 		}
// 	}
// })




