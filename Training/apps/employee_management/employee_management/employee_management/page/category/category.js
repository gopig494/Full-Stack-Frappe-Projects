frappe.pages['category'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Category',
		single_column: true
	});
	$(frappe.render_template("category")).appendTo(page.body.addClass("target"));

	page.add_inner_button('Update Posts', () => updatemenuitems())
}
var changedRows = [];
var dt;
frappe.pages['category'].refresh = function (wrapper) {
	// location.reload();

	$('.page-title .title-text').text('Category')



	frappe.call({
		method: 'employee_management.employee_management.page.category.category.get_list',
		args: { dtype: "Product" },
		callback: function (r) {
			// console.log(r.message)
			var items = r.message
			dt = new DataTable('#target', {
				columns: [
					{ name: 'Name', width: 150, editable: false, dropdown: false },
					{ name: 'Category name', width: 150, editable: true, dropdown: false },
					{ name: 'Update', width: 150, editable: false, align: "left", format: value => `<button class="btn-primary" onclick="updatemenuitems()">Update</button>` },

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


		// console.log(item);
		frappe.call({
			method: 'employee_management.employee_management.page.category.category.get_insert',
			args: {
				name: itemid,
				cname: itemTitle,

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










// frappe.pages['category'].refresh = function (wrapper) {
// 	// location.reload();

// 	$('.page-title .title-text').text('category')

// 	frappe.call({
// 			method:"employee_management.employee_management.page.category.category.get_list",
// 			args: { dtype: "Name" },

//             callback: function(data) {

// 		       	// console.log(data);
// 		       	// let m = data.message
// 		       	var items = data.message



//             	// let element = document.querySelector('.target');

// 				dt = new DataTable('#target', {

//     				columns: [{ name: 'Name', width: 150, editable: false, dropdown:false},{ name: 'Category name', width: 150, editable: true, dropdown:false},
//     				 { name: 'Update', width: 150,editable: false, align: "left", format: value => `<button class="btn-primary" onclick="updatemenuitems()">Update</button>` },
//     				 ],
//     				data:data.message,
//     				getEditor(colIndex, rowIndex, value, parent, column, row, data) {
// 					if (jQuery.inArray(rowIndex, changedRows) == -1) {
// 						changedRows.push(rowIndex);
// 					}
// 					if (colIndex == 4 && colIndex == 5) {
// 						const $input = document.createElement('input');
// 						$input.type = 'number';
// 						parent.appendChild($input);

// 						return {
// 							// called when cell is being edited
// 							initValue(value) {
// 								$input.focus();
// 								$input.value = value;
// 							},
// 							// called when cell value is set
// 							setValue(value) {

// 								$input.value = value;
// 							},
// 							// value to show in cell
// 							getValue() {
// 								return format($input.value);
// 							}
// 						}
// 					}





// function updatemenuitems(){
// 	var alldata = dt.datamanager.getRows();
// 	console.log(alldata);



//     var datas = [];

//     for (var i = 0; i < changedRows.length; i++) {

//     	var obj = {

//             'data': alldata[parseInt (changedRows[i])],
//             'rowIndex': parseInt(changedRows[i])
//         }
//         // console.log(obj);
//         datas.push(obj);


//     }





//     for (var i = 0; i < datas.length; i++) {
//     	var item = datas[i];

//     	var itemName = item.data[1].content;
// 		var itemCategoryname = item.data[2].content;
// 		console.log(itemName);

// 		frappe.call({
// 			method:"employee_management.employee_management.page.category.category.get_insert",
// 			args:{
// 				 name:itemName,
// 				 cname:itemCategoryname,

// 			},
// 			callback: function(r) {
// 				// console.log(r)
//                 if (i == datas.length) {


//                 }
//             }
//         });

//     }
//     // frappe.msgprint("Successfully updated");

//     // changedRows = [];









