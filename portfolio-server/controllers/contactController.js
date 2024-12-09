const Contact = require('../models/Contact');

// Handle contact form submissions
const handleContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error.message);
    res.status(500).json({ error: 'An error occurred on the server.' });
  }
};

// Get all contacts (for testing purposes)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error.message);
    res.status(500).json({ error: 'An error occurred on the server.' });
  }
};

module.exports = { handleContactForm, getContacts };
