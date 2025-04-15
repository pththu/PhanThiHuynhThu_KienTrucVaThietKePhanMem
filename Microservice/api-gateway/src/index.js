const express = require('express');
const router = require('./routes');

const app = express();
app.use('/', router);

const PORT = process.env.PORT || 2101;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});