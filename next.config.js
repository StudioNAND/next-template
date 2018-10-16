const dotenv = require('dotenv');
const webpack = require('webpack');

dotenv.config();

exports.webpack = config =>
  Object.assign(config, {
    plugins: [
      ...config.plugins,
      new webpack.EnvironmentPlugin({
        ...dotenv.config().parsed,
      }),
    ],
  });

exports.exportPathMap = () => ({
  '/': { page: '/' },
});
