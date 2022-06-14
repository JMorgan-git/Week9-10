const mocha = require('mocha');
const chai = require('chai');
const fac = require('./index');

mocha.describe('Test factorial', () => {
  mocha.it('should equal 5', () => {
    chai.expect(5).to.equal(fac.facrev(120));
  });
  mocha.it('should equal 4', () => {
    chai.expect(6).to.equal(fac.facrev(720));
  });
  mocha.it.skip('should equal 10', () => {
    chai.expect(4).to.equal(fac.facrev(22));
  });
});