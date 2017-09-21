var AllowedCharacters = {
	"username": $('#username-special-characters').text(),
	"email": $('#email-special-characters').text(),
	"password": $('#password-special-characters').text()
};
// puts the special allowed caracters in the warning message of its respective input


$(document).ready(function(){ // when the rendered html fully loads

	$('form').submit(function(event){

		var username 	= $('#user-name').val(),
			email 		= $('#user-email').val(),
			password	= $('#user-password').val();
			

		var invalidInput = false;

		if(isValidInput(username, AllowedCharacters["username"]))
			$("#invalid-name").css('display', 'none'); // hides warning
		else{
			$("#invalid-name").css('display', 'block'); // shows warning
			invalidInput = true;
		}

		if(isValidInput(email, AllowedCharacters["email"], "email"))
			$("#invalid-email").css('display', 'none');
		else{
			$("#invalid-email").css('display', 'block');
			invalidInput = true;
		}

		if(isValidInput(password, AllowedCharacters["password"]))
			$("#invalid-password").css('display', 'none');
		else{
			$("#invalid-password").css('display', 'block');
			invalidInput = true;
		}

		if(invalidInput)
			event.preventDefault();

	});
});