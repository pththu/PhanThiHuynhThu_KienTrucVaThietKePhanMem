const express = require('express');
const router = require('./routes');
const { createOrderTable } = require('./models');

const app = express();
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 2103;

createOrderTable().then(() => {
  app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
  });
});