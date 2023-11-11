import express from 'express';
const router = express.Router();
import * as loanController from '../controllers/loanController.js';

// Create a new loan
router.post('/create', loanController.createLoan);

// Update a loan by ID
router.put('/update', loanController.updateLoan);

// Get all loans
router.get('/all', loanController.getAllLoans);

// Get a loan by ID
router.get('/:id', loanController.getLoanById);

export default router;
