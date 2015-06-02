# postcss-camel-case
PostCSS plugin to convert CSS selector names to camelCase

Turns `.block_element--modifier` into `.blockElementModifier`. Basically the plugin does convert any class names with `-`, `_` punctuations into `camelCase` style.

## Warnings
Removing `-` and `_` characters from CSS class names may cause naming conflits:
```
.my-class -> .myClass
.my_class -> .myClass
```

## Why?
Because camel cased properties feels more natural in JavaScript. It is mainly built for [CSS Modules](https://github.com/css-modules/css-modules).
