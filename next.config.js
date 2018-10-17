const dotenv = require('dotenv');
const webpack = require('webpack');
const clearRequireCachePlugin = require('webpack-clear-require-cache-plugin');

const isDev = process.env.NODE_ENV !== 'production';

exports.webpack = config =>
  Object.assign(config, {
    plugins: [
      ...config.plugins,
      new webpack.EnvironmentPlugin({
        ...dotenv.config().parsed,
      }),
      isDev &&
        clearRequireCachePlugin([
          /\.next\/server\/static\/development\/pages/,
          /\.next\/server\/ssr-module-cache.js/,
          /ada-next/,
        ]),
    ],
  });
