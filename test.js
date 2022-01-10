/* eslint-env mocha */

const chai = require("chai");
const assert = chai.assert;

const altCase = require(".");

const normalTestText = "Tests";
const normalTest = altCase(normalTestText);

const complexTestText = "A slightly more complex test!";
const complexTest = altCase(complexTestText);

describe("the function", function() {
	it("should start with an uppercase letter", function() {
		assert.equal(normalTest[0], normalTest[0].toUpperCase());
	});

	it("should return a string", function() {
		assert.typeOf(normalTest, "string");
	});

	it("should return same length as input", function() {
		assert.lengthOf(normalTest, normalTestText.length);
		assert.lengthOf(complexTest, complexTestText.length);
	});

	describe("capsOnOdds parameter", function() {
		it("should default the capsOnOdds parameter to true", function() {
			const text = "should we capitalize odd characters?";
			assert.strictEqual(altCase(text), altCase(text, true));
		});

		it("should swap case when the capsOnOdds parameter is false", function() {
			assert.strictEqual(altCase("Capitals on evens", false), "cApItAlS On eVeNs");
		});
	});
});
