module.exports = (input, capsOnOdds = true) => {
	const chars = input.split("");
	return chars.map((value, index) => {
		if (capsOnOdds) {
			return index % 2 ? value.toLowerCase() : value.toUpperCase();
		} else {
			return index % 2 ? value.toUpperCase() : value.toLowerCase();
		}
	}).join("");
};
