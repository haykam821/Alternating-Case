/**
 * Converts every second character in a string to uppercase.
 * @param {string} input The string to convert to alternating case.
 * @param {boolean} capsOnOdds If true, the capitalization is zero-based.
 * @param {function} upperCase The function to run to transform to uppercase.
 * @param {function} lowerCase The function to run to transform to lowercase.
 * @returns {string} An alternating-cased string.
 */
function altCase(input, capsOnOdds = true, upperCase = String().toUpperCase, lowerCase = String().toLowerCase) {
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
