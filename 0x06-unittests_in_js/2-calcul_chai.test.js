const calculateNumber = require("./2-calcul_chai.js");
const chai = require('chai');

describe("calculateNumber", function() {
  it("should return 6", function() {
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it("should return -4", function() {
    chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it("should return 0.2", function() {
    chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it("should return Error", function() {
    chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
