import eslintConfigVue from '@script-development/eslint-config-vue'
import type { Linter } from "eslint";

export default [
    ...eslintConfigVue
]satisfies Linter.Config[];