function mirror(input) {
	var output = "";
	// Input is a valid string
	if (typeof input === "string") {
		// Iterate over string
		for (var i = 0; i < input.length; i++) {
			var c = input.charAt(i);
			if (c in Inverted) {
				output += Inverted[c];
			}
			else (output += c)
		}
	}
	return output;
}

function reverse(input) {
	var output = "";
	// Input is a valid string
	if (typeof input === "string") {
		// Iterate over string
		for (var i = input.length - 1; i >= 0; i--) {
			var c = input.charAt(i);
			if (c in Mirrored) {
				output += Mirrored[c];
			}
			else (output += c)
		}
	}
	return output;
}

function shrink(input) {
	var output = "";
	// Input is a valid string
	if (typeof input === "string") {
		// Iterate over string
		for (var i = 0; i < input.length; i++) {
			var c = input.charAt(i);
			if (c in Tiny) {
				output += Tiny[c];
			}
			else (output += c)
		}
	}
	return output;
}

function bold(input) {
	var output = "";
	// Input is a valid string
	if (typeof input === "string") {
		// Iterate over string
		for (var i = 0; i < input.length; i++) {
			var c = input.charAt(i);
			if (c in Bold) {
				output += Bold[c];
			}
			else (output += c)
		}
	}
	return output;
}