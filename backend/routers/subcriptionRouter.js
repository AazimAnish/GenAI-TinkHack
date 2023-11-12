import express from 'express';
const router = express.Router();
import * as subscriptionController from '../controllers/subscriptionController.js';

// Create a new subscription
router.post('/create', subscriptionController.createSubscription);

// Get all subscriptions
router.get('/all', subscriptionController.getAllSubscriptions);

// Get a subscription by ID
router.get('/:id', subscriptionController.getSubscriptionById);

// Update a subscription
router.put('/subscriptions', subscriptionController.updateSubscription);

export default router;
