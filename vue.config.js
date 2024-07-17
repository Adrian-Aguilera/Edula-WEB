const path = require('path');

module.exports = {
  publicPath: '/',
  configureWebpack: {
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
    },
  },
};