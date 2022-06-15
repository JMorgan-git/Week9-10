const mocha = require('mocha');
const chai = require('chai');
const facto = require('./index');

mocha.describe('facrev', () => {
  mocha.it('should equal 5', () => {
    chai.expect(5).to.equal(facto.facrev(120));
  });
  mocha.it('should equal 6', () => {
    chai.expect(facto.facrev(720)).to.equal(6);
  });
});
mocha.describe('fac', () => {
  mocha.it('should equal 120', () => {
    chai.expect(120).to.equal(facto.fac(5));
  });
  mocha.it('should equal 720', () => {
    chai.expect(facto.fac(6)).to.equal(720);
  });
});
mocha.describe('doggo', () => {
  mocha.it('should equal 6th', () => {
    chai.expect(`6th`).to.equal(facto.doggo(5));
  });
  mocha.it('should equal 21st', () => {
    chai.expect(`21st`).to.equal(facto.doggo(20));
  });
});