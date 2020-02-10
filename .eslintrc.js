module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  plugins: ['import'],
  settings: {
    'import/resolver': "node"
  },
  rules: {
    'import/no-extraneous-dependencies': 1,
    'import/no-unresolved': [2, { commonjs: true }]
  }
};