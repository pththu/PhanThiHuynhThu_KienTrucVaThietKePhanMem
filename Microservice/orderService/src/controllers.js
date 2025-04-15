const { Order } = require('./models');
const axios = require('axios');

const createOrder = async (req, res) => {
  const { customer_id, product_id, quantity } = req.body;
  try {
    // Verify product exists and has enough inventory
    const productResponse = await axios.get(`http://api-gateway:2101/api/products/${product_id}`);
    const product = productResponse.data;
    if (product.inventory < quantity) {
      return res.status(400).json({ error: 'Insufficient inventory' });
    }
    const order = await Order.create(customer_id, product_id, quantity);
    // Update inventory (async via message broker in real-world)
    await axios.put(`http://api-gateway:2101/api/products/${product_id}`, {
      ...product,
      inventory: product.inventory - quantity,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
};

const cancelOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.cancel(id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to cancel order' });
  }
};

module.exports = { createOrder, getOrder, cancelOrder };