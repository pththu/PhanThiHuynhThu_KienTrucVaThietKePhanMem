const express = require('express');
const { createCustomer, getCustomer, deleteCustomer, updateCustomer } = require('./controllers');

const router = express.Router();

router.post('/customers', createCustomer);
router.get('/customers/:id', getCustomer);
router.put('/customers/:id', updateCustomer);
router.delete('/customers/:id', deleteCustomer);

module.exports = router;