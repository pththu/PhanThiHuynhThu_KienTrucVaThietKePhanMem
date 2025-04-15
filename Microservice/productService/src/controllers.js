const { Product } = require('./models');

const createProduct = async (req, res) => {
  const { name, price, description, inventory } = req.body;
  try {
    const product = await Product.create(name, price, description, inventory);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, inventory } = req.body;
  try {
    const product = await Product.update(id, name, price, description, inventory);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
};

module.exports = { createProduct, getProduct, updateProduct, deleteProduct };