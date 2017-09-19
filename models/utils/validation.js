// isValidInput: String String String -> Boolean
// input: String to be validated
// allowedCharacters: String with special characters that are allowed in input
// [type]: String containing the type of input. If it is an email, it receives special
//         treatment, removing everything from @ onwards and validating the rest.
// Checks if the input given is valid, according to basic rules and allowedCharacters
// Characters 0-9, A-Z, a-z are valid by default
// returns true if input is valid, false otherwise
function isValidInput(input, allowedCharacters, type){
	input = input.toLowerCase();


	if(type === "email")
		input = input.split('@')[0];

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

module.exports = isValidInput; // makes method avaliable for other functions