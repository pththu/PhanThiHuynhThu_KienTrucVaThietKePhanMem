const pool = require('./db');

const createInventoryTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS inventory (
      product_id INT PRIMARY KEY,
      quantity INT NOT NULL,
      last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(query);
  console.log('Inventory table created or already exists');
};

module.exports = { createInventoryTable };