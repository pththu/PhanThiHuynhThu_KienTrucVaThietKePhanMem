const pool = require('./db');

const createCustomerTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS customers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address TEXT,
      phone VARCHAR(20)
    );
  `);
};

const Customer = {
  create: async (name, address, phone) => {
    const result = await pool.query(
      'INSERT INTO customers (name, address, phone) VALUES ($1, $2, $3) RETURNING *',
      [name, address, phone]
    );
    return result.rows[0];
  },
  findById: async (id) => {
    const result = await pool.query('SELECT * FROM customers WHERE id = $1', [id]);
    return result.rows[0];
  },
  update: async (id, name, address, phone) => {
    const result = await pool.query(
      'UPDATE customers SET name = $1, address = $2, phone = $3 WHERE id = $4 RETURNING *',
      [name, address, phone, id]
    );
    return result.rows[0];
  },
  delete: async (id) => {
    await pool.query('DELETE FROM customers WHERE id = $1', [id]);
  },
};

module.exports = { Customer, createCustomerTable };