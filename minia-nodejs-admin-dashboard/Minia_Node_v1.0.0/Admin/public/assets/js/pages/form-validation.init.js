/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Form validation Js File
*/

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();


// pristinejs validation

window.onload = function () {
	// pristinejs validation
	var form = document.getElementById("pristine-valid-example");
	var pristine = new Pristine(form);
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		var valid = pristine.validate();
		//alert('Form is valid: ' + valid);

	});


	// pristinejs common validation
	var commonform = document.getElementById("pristine-valid-common");
	var commonformpristine = new Pristine(commonform);
	commonform.addEventListener('submit', function (e) {
		e.preventDefault();
		var commonformvalid = commonformpristine.validate();
		//alert('Form is valid: ' + commonformvalid);
	});

	// validator to a specific field
	var specificfieldform = document.getElementById("pristine-valid-specificfield");
	var specificfieldpristine = new Pristine(specificfieldform);
	var specificfieldelem = document.getElementById("specificfield")

	specificfieldpristine.addValidator(specificfieldelem, function (value, el) {
		if (value.length && value[0] === value[0].toUpperCase()) {
			return true;
		}
		return false;
	}, "The first character must be capitalized", 2, false);

	specificfieldform.addEventListener('submit', function (e) {
		e.preventDefault();
		var specificfieldvalid = specificfieldpristine.validate();
		//alert('Form is valid: ' + specificfieldvalid);

	});
};

