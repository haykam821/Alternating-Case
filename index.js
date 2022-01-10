/**
 * Converts every second character in a string to uppercase.
 * @param {string} input The string to convert to alternating case.
 * @param {boolean} capsOnOdds If true, the capitalization is zero-based.
 * @param {function} upperCase The function to run to transform to uppercase.
 * @param {function} lowerCase The function to run to transform to lowercase.
 * @returns {string} An alternating-cased string.
 */
function altCase(input, capsOnOdds = true, upperCase = String().toUpperCase, lowerCase = String().toLowerCase) {
	if (typeof input !== "string") {
		throw new TypeError("Input must be a string");
	} else if (typeof capsOnOdds !== "boolean") {
		throw new TypeError("capsOnOdds parameter must be a boolean");
	} else if (typeof upperCase !== "function") {
		throw new TypeError("upperCase parameter must be a function");
	} else if (typeof lowerCase !== "function") {
		throw new TypeError("lowerCase parameter must be a function");
	}

	const chars = [...input];
	return chars.map((value, index) => {
		if (capsOnOdds) {
			return index % 2 ? lowerCase.apply(value) : upperCase.apply(value);
		} else {
			return index % 2 ? upperCase.apply(value) : lowerCase.apply(value);
		}
	}).join("");
}

module.exports = altCase;
