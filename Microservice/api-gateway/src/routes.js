const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

router.use('/api/products', (req, res, next) => {
  console.log('Proxying request to product-service: ', req.method, req.url);
  createProxyMiddleware({ target: 'http://localhost:2102', changeOrigin: true })(req, res, next);
});
router.use(
  '/api/orders',
  createProxyMiddleware({ target: 'http://localhost:2103', changeOrigin: true })
);
router.use(
  '/api/customers',
  createProxyMiddleware({ target: 'http://localhost:2104', changeOrigin: true })
);

module.exports = router;