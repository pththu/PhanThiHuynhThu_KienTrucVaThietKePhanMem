const express = require('express');
const rateLimit = require('express-rate-limit');
const router = require('./routes');
const { createInventoryTable } = require('./models');

const app = express();
app.use(express.json());

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Logging middleware
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.use('/api', router);

const PORT = process.env.PORT || 2106;

createInventoryTable().then(() => {
  app.listen(PORT, () => {
    console.log(`Inventory Service running on port ${PORT}`);
  });
});