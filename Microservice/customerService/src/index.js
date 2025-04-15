const express = require('express');
const router = require('./routes');
const { createCustomerTable } = require('./models');

const app = express();
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 2104;

createCustomerTable().then(() => {
  app.listen(PORT, () => {
    console.log(`Customer Service running on port ${PORT}`);
  });
});