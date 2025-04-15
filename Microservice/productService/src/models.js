const pool = require('./db');

const createProductTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      description TEXT,
      inventory INT NOT NULL
    );
  `);
};

const Product = {
  create: async (name, price, description, inventory) => {
    const result = await pool.query(
      'INSERT INTO products (name, price, description, inventory) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, price, description, inventory]
    );
    return result.rows[0];
  },
  findById: async (id) => {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    return result.rows[0];
  },
  update: async (id, name, price, description, inventory) => {
    const result = await pool.query(
      'UPDATE products SET name = $1, price = $2, description = $3, inventory = $4 WHERE id = $5 RETURNING *',
      [name, price, description, inventory, id]
    );
    return result.rows[0];
  },
  delete: async (id) => {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
  },
};

module.exports = { Product, createProductTable };