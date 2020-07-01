module.exports = {
  '*.{ts,js,tsx}': 'eslint --cache --fix',
  '*.{css,ts,tsx}': 'stylelint',
  '*.{ts,js,md}': 'prettier --write',
}
