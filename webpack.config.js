const path = require("path");

module.exports = {
  entry: [
    "./source/js/modules/modal.js",
    "./source/js/modules/nav.js",
    "./source/js/modules/mask.js",
    "./source/js/modules/phoneValidation.js",
    "./source/js/modules/scroll.js"
  ],
  output: {
    filename: "script.js"
  },
  devtool: false
};
