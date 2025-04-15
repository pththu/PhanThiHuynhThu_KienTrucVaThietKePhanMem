const { Customer } = require('./models');

const createCustomer = async (req, res) => {
  const { name, price, description, inventory } = req.body;
  try {
    const customer = await Customer.create(name, price, description, inventory);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create customer' });
  }
};

const getCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customer.findById(id);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customer' });
  }
};

const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, inventory } = req.body;
  try {
    const customer = await Customer.update(id, name, price, description, inventory);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update customer' });
  }
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    await Customer.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete customer' });
  }
};

module.exports = { createCustomer, getCustomer, updateCustomer, deleteCustomer };