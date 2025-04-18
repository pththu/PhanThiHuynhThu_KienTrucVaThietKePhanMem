const express = require('express');
const { createPayment, refundPayment } = require('./controllers');

const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).send('OK');
});

router.post('/payments', createPayment);
router.put('/payments/:id/refund', refundPayment);

module.exports = router;