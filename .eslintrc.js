module.exports = {
    "extends": ["airbnb"],
    "rules": {
        "react/prefer-stateless-function": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-use-before-define": 0,
        "react/prop-types": "off",
        "class-methods-use-this": "off",
        "arrow-body-style": "off",
        "max-len": ["error", 200],
        "object-shorthand": ["error", "never"],
    },
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "jsx": true
    }
};