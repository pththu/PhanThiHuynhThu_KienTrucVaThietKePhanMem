const pool = require('./db');

const createShipping = async (req, res) => {
  const { order_id } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO shipping (order_id, status) VALUES ($1, $2) RETURNING *',
      [order_id, 'shipped']
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create shipping' });
  }
};

const updateShippingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const result = await pool.query(
      'UPDATE shipping SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Shipping not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update shipping status' });
  }
};

module.exports = { createShipping, updateShippingStatus };