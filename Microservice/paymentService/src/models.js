const pool = require('./db');

const createPaymentTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS payments (
      id SERIAL PRIMARY KEY,
      order_id INT NOT NULL,
      amount DECIMAL(10,2) NOT NULL,
      status VARCHAR(50) DEFAULT 'pending', -- pending, completed, refunded
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(query);
  console.log('Payment table created or already exists');
};

module.exports = { createPaymentTable };