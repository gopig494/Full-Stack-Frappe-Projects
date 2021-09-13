// frappe.pages['Order Report'].on_page_load = function(wrapper) {
// 	var page = frappe.ui.make_app_page({
// 		parent: wrapper,
// 		title: 'Order Report Details',
// 		single_column: true
// 	});

// 	page.add_inner_button(__("New Product Order"), function () {
// 		frappe.new_doc('Orders Menu Info');
// 	});

// 	frappe.call({
//                 method: 'employee_management.employee_management.page.order_report.order_report.get_list',
//                 args: {  
//                 },
//                 async: false,
//                 callback: function(data) {
//                     if (data.message) {
//                     	console.log("in1")
//                         if (data.message.length > 0) {
//                         	console.log("in2")
//                         	console.log(data.message)
//                      $(frappe.render_template("order_report", { payments: data.message })).appendTo(page.body.addClass("no-border"));
//                   }  
//                 }
//             }

//             });	 
// }
frappe.pages['Order Report'].on_page_load = function(wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Order Report Details',
        single_column: true
    });
     // $('.page-content').find('.layout-main').append(frappe.render_template("test_info_meno"));
     //$('.page-content').find('.layout-main').prepend('<div class="formlist"></div>')
      $(frappe.render_template("order_report")).appendTo(page.body.addClass("listing"));
//     const data = [
//     {
//         'Department': 'IT Department',
//         'No of People': '10',
//         'indent': 0,
//     },
//     {
//         'Department': 'Javascript Team',
//         'No of People': '5',
//         'indent': 1,
//     },
//     {
//         'Department': 'Vue.js Team',
//         'No of People': '3',
//         'indent': 2,
//     },
//     {
//         'Department': 'React Team',
//         'No of People': '2',
//         'indent': 2,
//     },
//     {
//         'Department': 'Design Team',
//         'No of People': '5',
//         'indent': 1,
//     },
// ];

// const datatable = new DataTable('#listing', {
//     columns: ['Department', 'No of People'],
//     data: data
// });



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

frappe.pages['Order Report'].refresh = function(wrapper) {
    // location.reload();

    $('.page-title .title-text').text('Orders')

    frappe.call({
        method: 'employee_management.employee_management.doctype.orders_menu_info.orders_menu_info.get_order',
        // args: { dtype: "Order" },
        callback: function(r) {
            console.log(r.message)
            var items = r.message
            dt = new DataTable('#listing', {
                columns: [
                    { name: 'Order Status', width: 1, editable: false },
                    { name: 'Customer Name', width: 2, editable: true },
                    { name: 'Order Date', width: 1, editable: true },
                    { name: 'Payment Status', width: 1, editable: false },
                    { name: 'Total Amount', width: 1, editable: true, format: value => formatMoney(value) },
                    { name: 'Id', width: 1, editable: false },
                    { name: 'Update', width: 2, align: "center", format: value => `<button class="btn btn-success" onclick="updateorder()">Update</button>` },
                    // { name: 'Stock', width: 1, editable: true, align: "left" },
                    // { name: 'Inventory Method', width: 2, editable: true, align: "left" },
                    // { name: 'Active', width: 1, editable: true, align: "left" },
                    // { name: 'Featured Product', width: 1, editable: true, align: "left" },
                    // { name: 'Image', width: 2, align: "left", format: value => `<button class="btn-primary" onclick="get_image('${value}')">Add / Edit Image</button>` },

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
                    if (colIndex == 7) {
                        const $input = document.createElement('select');
                        var option1 = new Option("Track Inventory", "Track Inventory");
                        var option2 = new Option("Dont Track Inventory", "Dont Track Inventory");
                        var option3 = new Option("Track Inventory By Product Attributes", "Track Inventory By Product Attributes");
                        if (value == "Track Inventory") {
                            option1.setAttribute("selected", "selected");
                        }
                        if (value == "Dont Track Inventory") {
                            option2.setAttribute("selected", "selected");
                        }
                        if (value == "Track Inventory By Product Attributes") {
                            option3.setAttribute("selected", "selected");
                        }
                        var drpClass = "InventoryDrp-";
                        var changeName = 'InventoryDropUpdate';

                        $input.append(option1);
                        $input.append(option2);
                        $input.append(option3);
                        $input.setAttribute("id", drpClass + rowIndex);
                        $input.setAttribute("style", 'width:100%;height:26px');
                        $input.setAttribute("onchange", changeName + '(' + rowIndex + ')');
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
                    if (colIndex == 8 || colIndex == 9) {

                        const $input = document.createElement('select');
                        var option1 = new Option("Yes", "Yes");
                        var option2 = new Option("No", "No");
                        if (value == "Yes") {
                            option1.setAttribute("selected", "selected");
                        }
                        if (value == "No") {
                            option2.setAttribute("selected", "selected");
                        }
                        var drpClass = "ActiveDrp-";
                        var changeName = 'ActiveDropUpdate';
                        if (colIndex == 9) {
                            drpClass = "RecomDrp-";
                            changeName = 'RecomDropUpdate';
                        }
                        $input.append(option1);
                        $input.append(option2);
                        $input.setAttribute("id", drpClass + rowIndex);
                        $input.setAttribute("style", 'width:100%;height:26px');
                        $input.setAttribute("onchange", changeName + '(' + rowIndex + ')');
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

                    // console.log(dt.datamanager.getRows());
                },

                events: {
                    onRemoveColumn(column) {
                        console.log(column.id)
                    },
                    onSwitchColumn(column1, column2) {},
                    onSortColumn(column) {},
                    onCheckRow(row) {}
                },
            });
        },
    });
}

function updateorder() {
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
        var Orderstatus = item.data[1].content;
        var Cuatomername = item.data[2].content;
        var Orderdate = item.data[3].content;
        var Paymentstatus = item.data[4].content;
        var Totalamount = item.data[5].content;
        var name1 = item.data[6].content;

        console.log(item);
        frappe.msgprint(item);
        frappe.call({
            method: 'employee_management.employee_management.doctype.orders_menu_info.orders_menu_info.update_order',
            args: {
                // order : Orderstatus,
                customername: Cuatomername,
                // orderdate: Orderdate,
                // paymentstatus: Paymentstatus,
                // totalamount: Totalamount,
                 name : name1
            },
            callback: function(r) {
                if (i == datas.length) {
                    frappe.msgprint("Successfully Updated")
                }
            }
        });

    }
    // frappe.msgprint("Successfully updated");

    changedRows = [];
}





