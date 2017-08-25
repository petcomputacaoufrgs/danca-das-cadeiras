var usernameAllowedCharacters = ".-_",
	emailAllowedCharacters = ".-_",
	passwordAllowedCharacters = ".-_!@#$&";


$(document).ready(function(){
	$('form').submit(function(event){
		var username 	= $('#user-name').val(),
			email 		= $('#user-email').val(),
			password	= $('#user-password').val();
			

		var invalidInput = false;

		if(isValidInput(username, usernameAllowedCharacters))
			$("#invalid-name").css('display', 'none');
		else{
			$("#invalid-name").css('display', 'block');
			invalidInput = true;
		}

		if(isValidInput(emailName, emailAllowedCharacters, "email"))
			$("#invalid-email").css('display', 'none');
		else{
			$("#invalid-email").css('display', 'block');
			invalidInput = true;
		}

		if(isValidInput(password, passwordAllowedCharacters))
			$("#invalid-password").css('display', 'none');
		else{
			$("#invalid-password").css('display', 'block');
			invalidInput = true;
		}

		if(invalidInput)
			event.preventDefault();

	});
});
// a->z, 0-> . _ - !@#$&
// - _ .

// window.addEventListener('load', function{
// 	var form = document.querySelector('form');
// 	form.addEventListener('submit', function(event){
// 		if (form.checkValidity() == false) {
// 	        event.preventDefault();
// 	        event.stopPropagation();
// 	     }
// 	}, false);
// }, false);