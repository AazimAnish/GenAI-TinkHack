import express from 'express';
const router = express.Router();
import * as userController from '../controllers/userController.js';

// Define routes for user operations
router.post('/create', userController.createUser);
router.get('/read/all', userController.getAllUsers);
router.get('/read/:id', userController.getUserById);
router.post('/update', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

export default router;

