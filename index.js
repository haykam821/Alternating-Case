/**
 * Converts every second character in a string to uppercase.
 * @param {string} input The string to convert to alternating case.
 * @param {boolean} capsOnOdds If true, the capitalization is zero-based.
 * @returns {string} An alternating-cased string.
 */
function altCase(input, capsOnOdds = true) {
	const chars = input.split("");
	return chars.map((value, index) => {
		if (capsOnOdds) {
			return index % 2 ? value.toLowerCase() : value.toUpperCase();
		} else {
			return index % 2 ? value.toUpperCase() : value.toLowerCase();
		}
	}).join("");
}

module.exports = altCase;