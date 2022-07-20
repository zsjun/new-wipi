const fs = require('fs');
const path = require('path');
const withPlugins = require('next-compose-plugins');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const { config } = require('../../config/env');
const { locales, defaultLocale } = require('../../config/i18n');
const withAntd = require('./next-antd.config');
const withLess = require('next-with-less');
// const antdVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, './src/theme/antd.less'), 'utf8')
// );
const pathToLessFileWithVariables = path.resolve(path.resolve(__dirname, './src/theme/antd.less'));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: config.CLIENT_ASSET_PREFIX,
  i18n: {
    locales,
    defaultLocale,
  },
  env: {
    SERVER_API_URL: config.SERVER_API_URL || 'http://localhost:4000/api',
  },
  webpack: (config) => {
    // console.log(12, config);
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      })
    );
    // config.node = config.node || {};
    // config.node.fs = 'empty';
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withLess,
      {
        lessLoaderOptions: {
          additionalData: (content) => `${content}\n\n@import '${pathToLessFileWithVariables}';`,
        },
      },
    ],
    [
      withAntd,
      {
        cssModules: true,
        cssLoaderOptions: {
          sourceMap: false,
          importLoaders: 1,
        },
        lessLoaderOptions: {
          javascriptEnabled: true,
          modifyVars: pathToLessFileWithVariables,
        },
      },
    ],
  ],
  nextConfig
);

module.exports = nextConfig;
