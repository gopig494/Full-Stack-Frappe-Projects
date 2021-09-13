function sam(){
	let fname =  document.forms["myForm"]["fname"].value;
	let lname =  document.forms["myForm"]["lname"].value;
	let phone =  document.forms["myForm"]["phone"].value;
	let email =  document.forms["myForm"]["email"].value;
	let pass =  document.forms["myForm"]["pass"].value;

	

	console.log(fname)
	frappe.call({
			method: 'employee_management.templates.pages.register.get_insert',
			args: {
				fname: fname,
				lname: lname,
				phone:phone,
				email:email,
				password:pass,
				
			}
			
			// console.log("I Am Working")
		});

} 
