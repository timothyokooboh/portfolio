"use strict";
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
    prefix: "pt",
    theme: {
        colors: flattenValue(tokens.colors),
        font: flattenValue(tokens.font),
    },
    plugins: [],
};
//# sourceMappingURL=tailWindPreset.config.js.map