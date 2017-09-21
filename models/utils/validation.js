var globals = require('../../globals');
var AllowedCharacters = globals.AllowedCharacters;
var Courses = globals.Courses;
// isValidInput: String String [String] -> Boolean
// Given an input, a string of allowedcharacters and possibly a type, checks if
// the input is valid according to allowedcharacters and type.
// Characters 0-9, A-Z, a-z are valid by default
	// input: String to be validated
	// allowedCharacters: String with special characters that are allowed in input
	// [type]: String containing the type of input.
	//			 if type is "course", "email" or "internship" it recieves special treatment
	//           	if it is "email", removes everything from @ onwards and validates the rest
	//				if it is "course", it checks if the provided course input is on the Courses global list
	//              if it is "internship", it checks if the input contains just numbers
// returns true if input is valid, false otherwise
function isValidInput(input, allowedCharacters, type){

	if(input.length == 0)
		return false;


	switch(type){
		
		case "course": //if type is a course, checks if it is on the available courses
			return Courses.includes(input);
		break;

		case "internship": // if type is
			for(let i in input)
				if(input[i] < '0' || input[i] > '9')
					return false;
			return true;
		break;

		case "email": //if type is an email, takes out the part before @
			input = input.split('@')[0];
		break;
	}

	input = input.toLowerCase();

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
	// If any input is not valid, returns false
	// in each loop the key variable recieves one of the keys in the userData object
	// AllowedCharacters is made on purpose so that the same key access data related to userData[key] 
	for(let key in userData)
		if(isValidInput(userData[key], AllowedCharacters[key], key) === false){
			console.log("False -> " + key);
			return false;

		}

	return true;
}



module.exports = {isValidInput, validateAllInputs}; // makes method avaliable for other functions