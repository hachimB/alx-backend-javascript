const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApiration = require('./3-payment.js');


describe("sendPaymentRequestToApi", function() {
  it("should use Utils.calculateNumber for calculation", function() {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApiration(100, 20)
    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'SUM', 100, 20);
    spy.restore();
  });
});
