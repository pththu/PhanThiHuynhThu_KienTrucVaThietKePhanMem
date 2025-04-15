const express = require('express');
const { createOrder, getOrder, cancelOrder } = require('./controllers');

const router = express.Router();

router.post('/orders', createOrder);
router.get('/orders/:id', getOrder);
router.put('/orders/:id/cancel', cancelOrder);

module.exports = router;