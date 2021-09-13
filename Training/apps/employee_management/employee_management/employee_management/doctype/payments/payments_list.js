// frappe.listview_settings['Payments'] = {
// 	 button: {
//         show(doc) {
//             return doc.name
//         },
//          get_label() {
//             return 'View';
//         },
//         get_description(doc) {
//             return __('View {0}', [`${doc.payments} ${doc.name}`])
//         },
//         action(doc) {
//             frappe.set_route('Form',doc.orderss, doc.name);
//         }
//     }
// }
