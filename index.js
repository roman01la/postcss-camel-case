var postcss = require('postcss');

var pattern = /[-_.]+([a-zA-Z0-9])/g;

function replacer (g) {

    var character = g[g.length - 1];

    return g[0] === '.' ? '.' + character.toLowerCase() : character.toUpperCase();
}

module.exports = postcss.plugin('postcss-camel-case', function() {

    return function (css) {

        css.walkRules(function (rule) {

            rule.selector = rule.selector.replace(pattern, replacer);
        });
    };
});
