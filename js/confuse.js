function confuse(input) {
	var output = "";
	if (typeof input === "string") {
		// Input is a valid string

		// Iterate over string
		for (var i = 0; i < input.length; i++) {
			// Get the current character
			var c = input.charAt(i);
			// Flip a coin to decide whether or not this 
			// character gets replaced with a confusable
			var chance = parseInt(Math.random() * 2, 10);
			// Get the value of the character
			var v = c.charCodeAt();

			// Only confuse things if the char is in the BMP
			if (chance && v <= 0xFFFF) {
        		output = output + String.fromCodePoint(Confusables[v][(Math.round(Math.random() * (Confusables[v].length - 1)))]);
			}
			else {
				output = output + c;
			}
		}
		// For each charac
	}
	return output;
}

// Insert invisible characters.
function insertInvisibles(input) {

	if (typeof input === "string") {
		// Input is a valid string
	}
}

// Insert whitespace characters.
function insertWhitespace(input) {

	if (typeof input === "string") {
		// Input is a valid string
	}
}

// Insert artifacts like modifiers and
// accents.
function insertArtifacts(input) {
	if (typeof input === "string") {
		// Input is a valid string
	}

}