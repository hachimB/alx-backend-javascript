const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApiration = require('./3-payment.js');


describe("sendPaymentRequestToApi", function() {
  it("should use Utils.calculateNumber for calculation", function() {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(120);
    sendPaymentRequestToApiration(100, 20)
    sinon.assert.calledOnce(stub);
    sinon.assert.calledWith(stub, 'SUM', 100, 20);
    stub.restore();
  });
});
