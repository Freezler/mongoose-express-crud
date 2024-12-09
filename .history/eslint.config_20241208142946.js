// eslint.config.js
import { ignores } from '@antfu/eslint-config'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {

      '@stylistic/indent': ['error', 2],
      ignores: ["**/temp.js", "config/*"]
    }
      // ...
    },


  }
]