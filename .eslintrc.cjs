require('svelte/compiler')

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        'svelte3',
    ],
    "rules": {
    },
    "overrides": [
      {
        "files": ['*.svelte'],
        "processor": 'svelte3/svelte3'
      }
    ],
    "settings": {
      'svelte3/typescript': true,
    }
};
