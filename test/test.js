var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-camel-case', function() {

    it('should convert BEM style class names', function (done) {
        test('.block_element--modifier {}', '.blockElementModifier {}', {}, done);
    });

    it('should convert uppercased BEM style class names', function (done) {
        test('.Block_Element--Modifier {}', '.blockElementModifier {}', {}, done);
    });
});
