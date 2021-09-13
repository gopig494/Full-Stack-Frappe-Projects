function sam(){
    
$(".page-content-wrapper").empty()
	frappe.call({
	method:"employee_management.templates.pages.order.get_list",
	
	async: false,

	callback: function(data) {
		if (data.message) {
			if (data.message.length > 0) {
				console.log(data.message);
				let tab_html = $(`<table class="table table-bordered" style="cursor:pointer; margin:0px;">
                <thead>
                    <tr>
                        <th style="width: 20%;">${__("Name")}</th>
                       
                        <th style="width: 20%;">${__("Total")}</th>
                        <th style="width: 20%;">${__("Creation data")}</th>
                        
                        
                    </tr>
                </thead>
                <tbody></tbody>
            </table>`).appendTo($(".page-content-wrapper"));
       

       let mow = data.message
       console.log(mow);


       
       mow.forEach(function(m){
          
                let name = m.name;
                let total = m.total;
                let creation = m.creation;
               


                let row = $(`<tr>
                       
                        <td>${__(name)}</td>
                        <td>${__(total)}</td>
                        <td>${__(creation)}</td>
                        
                    </tr>`);
                tab_html.find('tbody').append(row);

       })

				
			}
		}
	}
});

}

