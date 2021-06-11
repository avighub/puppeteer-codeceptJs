module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2020": true,
        "codeceptjs/codeceptjs": true
    },
    "extends": ["plugin:codeceptjs/recommended"],
    "rules": {
        "codeceptjs/no-actor-in-scenario": 2
    },
    "plugins": [
        "codeceptjs"
    ]
};
