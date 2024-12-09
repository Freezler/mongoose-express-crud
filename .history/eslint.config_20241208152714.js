// eslint.config.js
import stylistic from '@stylistic/eslint-plugin'

export default [
    {
        ignores: ["/.history"],
        plugins: {
            '@stylistic': stylistic
        },
        rules: {

            '@stylistic/indent': ['error', 4]
        }
    // ...
    },



]
