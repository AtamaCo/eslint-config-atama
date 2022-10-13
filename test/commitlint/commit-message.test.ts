import * as lint from '@commitlint/lint';
import load from '@commitlint/load';

describe('Atama commitlint configuration', () => {
  it('Should allow body length of over 100 characters', async () => {
    const loadedConfig = await load(undefined, {
      cwd: __dirname,
      file: '../../commitlint.config.js',
    });

    const aStringOver100Characters =
      'This is a very long commit message that should be allowed. This is another sentence to really push us over the limit here!';

    const result = await lint.default(
      `fix(docs): this is a very long commit message that should be allowed

        ${aStringOver100Characters}

        `,
      loadedConfig.rules,
    );

    expect(aStringOver100Characters.length).toBeGreaterThan(100);
    expect(result.valid).toBe(true);
  });
});
