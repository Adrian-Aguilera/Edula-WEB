const path = require('path');

module.exports = {
  publicPath: '/',
  configureWebpack: {
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@routes': path.resolve(__dirname, 'src/router'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      }
    }
  },
};