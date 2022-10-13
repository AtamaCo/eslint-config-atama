module.exports = {
  extends: ['@commitlint/config-conventional'],

  /**
   * Custom rules for Atama.
   */
  rules: {
    'body-max-line-length': [0, 'always'],
    'footer-max-length': [0, 'always'],
  },
};
