const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/?results=10',
    createProxyMiddleware({
      target: 'https://randomuser.me',
      changeOrigin: true,
    })
  );
   app.use(
    '/api/?gender=male',
    createProxyMiddleware({
      target: 'https://randomuser.me',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/?gender=female',
    createProxyMiddleware({
      target: 'https://randomuser.me',
      changeOrigin: true,
    })
  );
};