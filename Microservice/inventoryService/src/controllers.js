const pool = require('./db');

const updateInventory = async (req, res) => {
  const { product_id, quantity } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO inventory (product_id, quantity) VALUES ($1, $2) ON CONFLICT (product_id) DO UPDATE SET quantity = inventory.quantity + $2, last_updated = CURRENT_TIMESTAMP RETURNING *',
      [product_id, quantity]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update inventory' });
  }
};

const getInventory = async (req, res) => {
  const { product_id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM inventory WHERE product_id = $1', [product_id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Inventory not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get inventory' });
  }
};

module.exports = { updateInventory, getInventory };