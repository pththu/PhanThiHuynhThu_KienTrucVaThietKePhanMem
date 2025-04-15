const express = require('express');
const { createProduct, getProduct, updateProduct, deleteProduct } = require('./controllers');

const router = express.Router();

router.post('/products', createProduct);
router.get('/products/:id', getProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;