const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
      createProxyMiddleware('/api1', {
        target: process.env.REACT_APP_SERVER_BASE_URL1, // API endpoint 1
        changeOrigin: true,
        pathRewrite: {
          "^/api1": "",
        },
        headers: {
          Connection: "keep-alive"
        }
      })
    );
    app.use(
      createProxyMiddleware('/api2', {
        target: process.env.REACT_APP_SERVER_BASE_URL2, // API endpoint 2
        changeOrigin: true,
        pathRewrite: {
          "^/api2": "",
        },
        headers: {
          Connection: "keep-alive"
        }
      })
    );
  }