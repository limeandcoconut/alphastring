var alphastring = require('./index.js');

var expect = require('chai').expect;

/* eslint-disable no-undef */
describe('On the subject of the alphastring function, it ', function() {

    it('should generate alphabetical string using upper and/or lower case', function() {
        expect(/[a-zA-Z]+/.test(alphastring())).to.equal(true);
    });

    it('should default to 12 characters', function() {
        expect(alphastring()).to.have.length(12);
    });

    it('should be relatively unique', function(done) {
        var i = 0;
        var previous = {};
        var auid;
        while (i < 100000) {
            auid = alphastring();
            expect(typeof previous[auid]).to.equal('undefined');
            previous[auid] = true;
            i++;
        }

        done();
    });
});
