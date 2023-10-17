'use strict';

const expect = require('chai').expect;
const helperFuncs = require('../../shared/helpers');

describe('shared/helpers.js', () => {
  describe('IPFinderFromRequest - Find the IP from Request', () => {
    it('should return IP address from the request header', () => {
      let IP = '198.168.1.2';
      let mockRequst = {
        headers: {
          'x-forwarded-for': `::ffff:${IP}`
        }
      };
      const result = helperFuncs.IPFinderFromRequest(mockRequst);
      expect(result).to.equal(IP);
    });

    it('should return IP address from the request connection', () => {
      let IP = '198.168.1.1';
      let mockRequst = {
        connection: {
          'remoteAddress': `::ffff:${IP}`
        }
      };
      const result = helperFuncs.IPFinderFromRequest(mockRequst);
      expect(result).to.equal(IP);
    });
  });
});