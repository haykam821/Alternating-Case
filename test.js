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

	describe("input parameter", function() {
		it("should throw when not a string", function() {
			const values = [true, 1, null];
			for (const value of values) {
				assert.throws(() => {
					altCase(value);
				}, TypeError, "Input must be a string");
			}
		});
	});

	describe("capsOnOdds parameter", function() {
		it("should default the capsOnOdds parameter to true", function() {
			const text = "should we capitalize odd characters?";
			assert.strictEqual(altCase(text), altCase(text, true));
		});

		it("should swap case when the capsOnOdds parameter is false", function() {
			assert.strictEqual(altCase("Capitals on evens", false), "cApItAlS On eVeNs");
		});

		it("should throw when not a boolean", function() {
			const values = ["", 1, null];
			for (const value of values) {
				assert.throws(() => {
					altCase("", value);
				}, TypeError, "capsOnOdds parameter must be a boolean");
			}
		});
	});

	describe("upperCase and lowerCase parameters", function() {
		it("should throw when not a function", function() {
			const values = ["", 1, null];

			for (const value of values) {
				assert.throws(() => {
					altCase("", undefined, value);
				}, TypeError, "upperCase parameter must be a function");
			}
			for (const value of values) {
				assert.throws(() => {
					altCase("", undefined, undefined, value);
				}, TypeError, "lowerCase parameter must be a function");
			}
		});
	});
});
