const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", function() {
  it("should return 4 which is the sum of two rounded numbers (1 and 3)", function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("should return 5 which is the sum of two rounded numbers (1 and 3.7)", function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it("should return 5 which is the sum of two rounded numbers (1.2 and 3.7)", function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it("should return 6 which is the sum of two rounded numbers (1.5 and 3.7)", function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
