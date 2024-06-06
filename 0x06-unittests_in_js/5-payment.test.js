const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function() {
  let stub;

  beforeEach(function() {
    stub = sinon.stub(Utils, 'calculateNumber');
  });

  afterEach(function() {
    stub.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function() {
    const consoleSpy = sinon.spy(console, 'log');
    stub.returns(120);

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWith(consoleSpy, 'The total is: 120');

    consoleSpy.restore();
  });

  it('should log "The total is: 20" when called with 10 and 10', function() {
    const consoleSpy = sinon.spy(console, 'log');
    stub.returns(20);

    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWith(consoleSpy, 'The total is: 20');

    consoleSpy.restore();
  });
});
