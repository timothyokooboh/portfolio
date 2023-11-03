const tokens = require("./tokens/js/tokens");

const flattenValue = (obj) => {
  const result = {};

  Object.keys(obj).forEach((key) => {
    if (!obj[key].value) {
      result[key] = flattenValue(obj[key]);
    } else {
      result[key] = obj[key].value;
    }
  });

  return result;
};

module.exports = {
  prefix: "pt", // short for portfolio
  theme: {
    colors: flattenValue(tokens.colors),
    font: flattenValue(tokens.font),
  },
  plugins: [],
};
