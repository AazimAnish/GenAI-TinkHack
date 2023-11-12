import express from 'express';
const router = express.Router();
import * as salaryController from '../controllers/salaryController.js';

router.post('/create', salaryController.createSalary);
router.post('/update', salaryController.updateSalary);

export default router;
