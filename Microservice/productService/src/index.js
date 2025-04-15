const express = require('express');
const router = require('./routes');
const { createProductTable } = require('./models');

const app = express();
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 2102;

createProductTable().then(() => {
  app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
  });
});