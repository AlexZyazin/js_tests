module.exports = {
    "parser": "@babel/eslint-parser",
    "env": {
        "browser": true,
        "es2021": true,
        "mocha": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "browser": true,
        "$": true,
        "$$": true,
        "expect": true,
        "global": true,
        "require": true,
        "exports": true
      }
//   "parserOptions": {
//        "ecmaVersion": 12,
//        "sourceType": "module"
//    },
//    "rules": {
//    },
};