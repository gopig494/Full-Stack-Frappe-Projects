frappe.pages['sam'].on_page_load = function(wrapper) {

	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'None',
		single_column: true,


	});
	 $(frappe.render_template("sam")).appendTo(page.body.addClass("target"));
	 // document.write(
  //     unescape("%3Cscript src='https://unpkg.com/frappe-datatable@0.0.5/dist/frappe-datatable.min.j' type='text/javascript'%3E%3C/script%3E")
  //   );
 

// 	var jQueryScript = document.createElement('datatabel');  
// jQueryScript.setAttribute('src','https://unpkg.com/frappe-datatable/dist/frappe-datatable.min.js');
// document.head.appendChild(jQueryScript);

	
	// function include(file) {
	  
	//   var script  = document.createElement('script');
	//   script.src  = file;
	//   script.type = 'text/javascript';
	//   script.defer = true;
	  
	//   document.getElementsByTagName('head').item(0).appendChild(script);
	  
	// }
	// include('https://unpkg.com/frappe-datatable@0.0.5/dist/frappe-datatable.min.js');
	// include('https://unpkg.com/sortablejs@1.7.0/Sortable.min.js');
	// include('https://unpkg.com/clusterize.js@0.18.0/clusterize.min.js');

// let element = document.querySelector('.target');
const options = {
   
    columns: [
                    { name: 'name', width: 150, editable: true, dropdown:false, format: (value) => {
                return value.bold();
            }},
                    { name: 'Position', width: 150, editable: true },
                    { name: 'Salary', width: 150, editable: true },
                ],
    data: [
        ['John Doe', 'DevOps Engineer', '$12300'],
        ['Mary Jane', 'UX Design', '$14000'],
    ],
    getEditor(colIndex, rowIndex, value, parent, column, row, data) {
        // colIndex, rowIndex of the cell being edited
        // value: value of cell before edit
        // parent: edit container (use this to append your own custom control)
        // column: the column object of editing cell
        // row: the row of editing cell
        // data: array of all rows
        if (colIndex == 4){
        	const $input = document.createElement('input');
    		$input.type = 'Currency';
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
    },
    checkboxColumn:true,
    freezeMessage:'',
   
}

const datatable = new DataTable('#target', options);

    

	


	
	
}
