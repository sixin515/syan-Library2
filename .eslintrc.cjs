/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true, // 添加 Node.js 环境
    browser: true // 如果你的代码在浏览器中运行，添加这一行
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}

