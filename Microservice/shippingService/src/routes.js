const express = require('express');
const { createShipping, updateShippingStatus } = require('./controllers');

const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).send('OK');
});

router.post('/shipping', createShipping);
router.put('/shipping/:id/status', updateShippingStatus);

module.exports = router;