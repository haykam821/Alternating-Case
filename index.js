module.exports = function(string) {
	const characters = string.toLowerCase().split("");
	const length = characters.length;

	for (let item = 0; item < length; item += 2) {
		characters[item] = characters[item].toUpperCase();
	}
	return characters.join("");
};
