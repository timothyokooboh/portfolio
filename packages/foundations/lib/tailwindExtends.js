"use strict";
/**
 * Create an object that is compatible with
 * what Tailwind CSS expects in its theme.extend option
 */
var tokens = require("./tokens/js/tokens");
var flattenValue = function (obj) {
    var result = {};
    Object.keys(obj).forEach(function (key) {
        if (!obj[key].value) {
            result[key] = flattenValue(obj[key]);
        }
        else {
            result[key] = obj[key].value;
        }
    });
    return result;
};
module.exports = {
    colors: flattenValue(tokens.colors),
    fontSize: flattenValue(tokens.fontSize),
    lineHeight: flattenValue(tokens.lineHeight),
    fontFamily: {
        publicSans: "Public Sans",
        ibarra: "Ibarra Real Nova",
    },
};
//# sourceMappingURL=tailwindExtends.js.map