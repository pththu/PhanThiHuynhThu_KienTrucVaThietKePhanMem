const express = require('express');
const { updateInventory, getInventory } = require('./controllers');

const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).send('OK');
});

router.post('/inventory', updateInventory);
router.get('/inventory/:product_id', getInventory);

module.exports = router;