'use strict';

const expect = require('chai').expect;
const crypto = require('../../shared/crypto-manager');

describe('shared/crypto-manager.js', () => {
  describe('encrypto', () => {
    it('should return encrypted string using IV and KEY', () => {
      const encrypted = crypto.encrypto('securityForYou');
      expect(encrypted).to.equal('H+Owpzpy3XM1oUw9qf8bWw==');
    });
  });

  describe('decrypto', () => {
    it('should return plain string (decrypted) using IV and KEY', () => {
      const encrypted = crypto.decrypto('H+Owpzpy3XM1oUw9qf8bWw==');
      expect(encrypted).to.equal('securityForYou');
    });
  });
});