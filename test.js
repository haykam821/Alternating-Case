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
});
