var globals = require('../../globals');
var AllowedCharacters = globals.AllowedCharacters,
var Courses = globals.Courses;
// isValidInput: String String [String] -> Boolean
// Given an input, a string of allowedcharacters and possibly a type, checks if
// the input is valid according to allowedcharacters and type.
// Characters 0-9, A-Z, a-z are valid by default
	// input: String to be validated
	// allowedCharacters: String with special characters that are allowed in input
	// [type]: String containing the type of input.
	//             If it is an email, removes everything from @ onwards and validating the rest
	//              
// returns true if input is valid, false otherwise
function isValidInput(input, allowedCharacters, type){
	input = input.toLowerCase();

	if(input.length == 0)
		return false;


	switch(type){

	case "course": //If it's a course, checks if it is on the available courses
		return Courses.includes(input);

	case "internship":
		//Some code
		break;

	case "email": //If it's an email, takes out the part before @
		input = input.split('@')[0];
		break;



		
	}

	//Basic treatment for checking if the characters are allowed
	for(let i in input){
		var currentChar = input.charAt(i);

		var isInAlphabet = currentChar >= 'a' && currentChar <= 'z';
		var isNumber = currentChar >= '0' && currentChar <= '9';
		var isAllowedSpecialChar = allowedCharacters.includes(currentChar);

		var isAllowed = isInAlphabet || isAllowedSpecialChar || isNumber;
		if(!isAllowed)
			return false;
	}
	return true;
}


// validateAllInputs: Object -> Boolean
// validate all fields in Inputs based on the isValidInput function
function validateAllInputs(userData){
	for(var Data in userData)
		// If input is not valid, returns false
		if(isValidInput(userData[Data], AllowedCharacters[Data], Data) == false)
			return false;


	return true;
}



module.exports = {isValidInput, validateAllInputs}; // makes method avaliable for other functions