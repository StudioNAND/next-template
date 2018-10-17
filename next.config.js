const dotenv = require('dotenv');
const webpack = require('webpack');

exports.webpack = config =>
  Object.assign(config, {
    plugins: [
      ...config.plugins,
      new webpack.EnvironmentPlugin({
        ...dotenv.config().parsed,
      }),
    ],
  });
