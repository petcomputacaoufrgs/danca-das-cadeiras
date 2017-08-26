var usernameAllowedCharacters = ".-_",
	emailAllowedCharacters = ".-_",
	passwordAllowedCharacters = ".-_!@#$&";
// puts the special allowed caracters in the warning message of its respective input
$('#username-special-characters').text(usernameAllowedCharacters); 
$('#email-special-characters').text(emailAllowedCharacters);
$('#password-special-characters').text(passwordAllowedCharacters);

$(document).ready(function(){ // when the rendered html fully loads

	$('form').submit(function(event){

		var username 	= $('#user-name').val(),
			email 		= $('#user-email').val(),
			password	= $('#user-password').val();
			

		var invalidInput = false;

		if(isValidInput(username, usernameAllowedCharacters))
			$("#invalid-name").css('display', 'none'); // hides warning
		else{
			$("#invalid-name").css('display', 'block'); // shows warning
			invalidInput = true;
		}

		if(isValidInput(email, emailAllowedCharacters, "email"))
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