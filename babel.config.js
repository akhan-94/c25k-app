module.exports = {
  presets: ['@rnx-kit/babel-preset-metro-react-native'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-transform-class-static-block', {loose: true}],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@app': './src/app',
          '@lib': './src/lib',
          '@services': './src/services',
          '@features': './src/features',
          '@shared': './src/shared',
        },
      },
    ],
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-export-namespace-from',
  ],
};
