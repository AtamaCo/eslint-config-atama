const baseConfig = require('./base');

module.exports = {
  ...baseConfig,
  extends: ['next', ...baseConfig.extends],
  overrides: [
    ...baseConfig.overrides,
    // Next.js needs default exports for pages and API endpoints
    {
      files: ['pages/**/*', 'src/pages/**/*', 'src/app/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    // next.config.js is a build file hence "devDependencies" should be allowed.
    {
      files: ['next.config.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
