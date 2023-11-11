const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

// Create a new loan
router.post('/create', loanController.createLoan);

// Update a loan by ID
router.put('/update', loanController.updateLoan);

// Get all loans
router.get('/all', loanController.getAllLoans);

// Get a loan by ID
router.get('/:id', loanController.getLoanById);

module.exports = router;
