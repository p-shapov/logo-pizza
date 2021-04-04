module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json'
          ],
          alias: {
            'tests': ['./tests/'],
            'components': './src/components',
            'shared': './src/shared',
            'modules': './src/modules',
            'containers': './src/containers',
            'globals': './src/globals',
            'variables': './src/variables',
            'images': './src/assets/images'
          }
        }
      ]
    ]
  };
};
