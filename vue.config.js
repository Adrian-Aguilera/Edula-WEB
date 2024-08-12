const path = require('path');

module.exports = {
  publicPath: '/',
  configureWebpack: {
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      host: '0.0.0.0', // Permite que el servidor escuche en todas las interfaces de red
      allowedHosts: 'all',
      public: process.env.VUE_APP_PUBLIC_URL || 'localhost:8080',
      port: process.env.VUE_APP_PORT || 8080,
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