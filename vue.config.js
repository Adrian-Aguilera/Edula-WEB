const path = require('path');

module.exports = {
  publicPath: '/',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    host: '0.0.0.0', // Permite que el servidor escuche en todas las interfaces de red
    allowedHosts: 'all', // Permite cualquier host
    port: process.env.VUE_APP_PORT || 8082,
    client: {
      webSocketURL: {
        protocol: 'wss',
        hostname: 'localhost',
        port: process.env.VUE_APP_PORT || 8080,
        pathname: '/ws',
      },
    },
  },
  configureWebpack: {
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