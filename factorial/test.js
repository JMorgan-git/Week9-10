const mocha = require('mocha');
const chai = require('chai');
const facto = require('./index');

mocha.describe('index', () => {
  mocha.describe('facrev', () => {
    mocha.it('should equal 5', () => {
      chai.expect(5).to.equal(facto.facrev(120));
    });
    mocha.it('should equal 6', () => {
      chai.expect(facto.facrev(720)).to.equal(6);
    });
  });
});