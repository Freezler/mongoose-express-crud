// eslint.config.js
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    ignores: [".config/*"]
    plugins: {
      '@stylistic': stylistic
    },
    rules: {

      '@stylistic/indent': ['error', 2]
    }
    // ...
  },



]
