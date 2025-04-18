const express = require('express');
const rateLimit = require('express-rate-limit');
const router = require('./routes');

const app = express();

// Rate Limiter
const limiter = rateLimit({
  windowMs: 60 * 1000, // 5 seconds
  max: 5, // Limit each IP to 50 requests per windowMs
});
app.use(limiter);

// Logging middleware
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.use('/', router);

const PORT = process.env.PORT || 2101;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});