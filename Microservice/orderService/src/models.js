const pool = require('./db');

const createOrderTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      customer_id INT NOT NULL,
      product_id INT NOT NULL,
      quantity INT NOT NULL,
      status VARCHAR(50) DEFAULT 'pending'
    );
  `);
};

const Order = {
  create: async (customer_id, product_id, quantity) => {
    const result = await pool.query(
      'INSERT INTO orders (customer_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
      [customer_id, product_id, quantity]
    );
    return result.rows[0];
  },
  findById: async (id) => {
    const result = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
    return result.rows[0];
  },
  cancel: async (id) => {
    const result = await pool.query(
      "UPDATE orders SET status = 'cancelled' WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  },
};

module.exports = { Order, createOrderTable };