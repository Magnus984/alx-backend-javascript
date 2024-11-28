const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const brother = sinon.spy(console);
    const dumb = sinon.stub(Utils, 'calculateNumber');

    dumb.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(dumb.calledWith('SUM', 100, 20)).to.be.true;
    expect(dumb.callCount).to.be.equal(1);
    expect(brother.log.calledWith('The total is: 10')).to.be.true;
    expect(brother.log.callCount).to.be.equal(1);
    dumb.restore();
    brother.log.restore();
  });
});
