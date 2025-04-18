const pool = require('./db');

const createShippingTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS shipping (
      id SERIAL PRIMARY KEY,
      order_id INT NOT NULL,
      status VARCHAR(50) DEFAULT 'pending', -- pending, shipped, delivered
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(query);
  console.log('Shipping table created or already exists');
};

module.exports = { createShippingTable };