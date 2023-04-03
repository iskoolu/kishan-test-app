module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/prop-types': ['off'],
    }
}
