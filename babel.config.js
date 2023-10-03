module.exports = {
  presets: ['@rnx-kit/babel-preset-metro-react-native'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@lib': './src/lib',
          '@features': './src/features',
          '@config': './src/config',
          '@shared': './src/shared',
        },
      },
    ],
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-export-namespace-from',
  ],
};
