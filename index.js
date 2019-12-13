var postcss = require('postcss');

function replacer(g) {
    var character = g[g.length - 1];

    return g[0] === '.' ? '.' + character.toLowerCase() : character.toUpperCase();
}

module.exports = postcss.plugin('postcss-camel-case', function (opts = {}) {
    var pattern = new RegExp(
        `[-.${opts.skipUnderscore ? '' : '_'}]+([a-zA-Z])`,
        'g'
    );
    return function (css) {
        css.walkRules(function (rule) {
            rule.selector = rule.selector.replace(pattern, replacer);
        });
    };
});
