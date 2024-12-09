const express = require('express');
const router = express.Router();
const { handleContactForm, getContacts } = require('../controllers/contactController');

// POST request to submit contact form
router.post('/contact', handleContactForm);

// GET request to fetch all contacts (optional, for debugging or testing)
router.get('/contact', getContacts);

module.exports = router;
