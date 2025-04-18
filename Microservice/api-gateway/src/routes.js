const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require('axios');
const axiosRetry = require('axios-retry').default;

const router = express.Router();

// Trạng thái Circuit Breaker cho từng service
let failureCounts = {};
let circuitStates = {};

// Cấu hình axios-retry (Retry)
axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    console.log(`Retry attempt ${retryCount} for request`);
    return retryCount * 1000; // Delay 1s, 2s, 3s
  },
  retryCondition: (error) => {
    return error.response && (error.response.status >= 500 || error.response.status === 429);
  },
});

// Time Limiter cho axios
const timeout = 60000; // 1p
axios.defaults.timeout = timeout;

// Custom middleware để proxy với Circuit Breaker, Retry, Time Limiter
const createRetryProxy = (target) => {
  const proxy = createProxyMiddleware({
    target,
    changeOrigin: true,
    logLevel: 'debug',
    onError: (err, req, res) => {
      console.error(`Proxy error to ${target}: ${err.message}`);
      failureCounts[target] = (failureCounts[target] || 0) + 1;
      if (failureCounts[target] >= 3) {
        circuitStates[target] = 'OPEN';
        console.log(`Circuit opened for ${target}`);
        setTimeout(() => {
          circuitStates[target] = 'HALF_OPEN';
          failureCounts[target] = 0;
          console.log(`Circuit half-open for ${target}`);
        }, 10000); // Chuyển sang HALF_OPEN sau 10 giây
      }
      res.status(503).send('Service unavailable, please try again later');
    },
    onProxyRes: (proxyRes, req, res) => {
      // Reset failure count nếu request thành công
      if (proxyRes.statusCode >= 200 && proxyRes.statusCode < 300) {
        if (circuitStates[target] === 'HALF_OPEN') {
          circuitStates[target] = 'CLOSED';
          console.log(`Circuit closed for ${target}`);
        }
        failureCounts[target] = 0;
      }
    },
  });

  return (req, res, next) => {
    console.log(`Proxying request to ${target}: ${req.method} ${req.url}`);
    if (circuitStates[target] === 'OPEN') {
      console.log(`Blocked by circuit breaker for ${target}`);
      return res.status(503).send('Circuit open: Service unavailable');
    }
    proxy(req, res, next);
  };
};

// Proxy đến các service
router.use('/api/products', createRetryProxy('http://product-service:2102/api/products'));
router.use('/api/orders', createRetryProxy('http://order-service:2103/api/orders'));
router.use('/api/customers', createRetryProxy('http://customer-service:2104/api/customers'));
router.use('/api/payments', createRetryProxy('http://payment-service:2105/api/payments'));
router.use('/api/inventory', createRetryProxy('http://inventory-service:2106/api/inventory'));
router.use('/api/shipping', createRetryProxy('http://shipping-service:2107/api/shipping'));

module.exports = router;