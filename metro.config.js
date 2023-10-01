/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {makeMetroConfig} = require('@rnx-kit/metro-config');
const {
  CyclicDependencies,
} = require('@rnx-kit/metro-plugin-cyclic-dependencies-detector');
const {MetroSerializer} = require('@rnx-kit/metro-serializer');
const {TypeScriptPlugin} = require('@rnx-kit/metro-plugin-typescript');

module.exports = makeMetroConfig({
  serializer: {
    experimentalSerializerHook: TypeScriptPlugin(),
    customSerializer: MetroSerializer([
      CyclicDependencies({
        includeNodeModules: false,
        linesOfContext: 1,
        throwOnError: false,
      }),
    ]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
});
