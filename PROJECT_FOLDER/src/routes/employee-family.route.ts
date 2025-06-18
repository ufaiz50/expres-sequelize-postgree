import express from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { createEmployeeFamily, deleteEmployeeFamily, getAllEmployeeFamilies, getEmployeeFamilyById, getPageEmployeeFamilies, updateEmployeeFamily } from '../controllers/employee-family.controller';
import { createEmployeeFamilyValidator, updateEmployeeFamilyValidator } from '../validators/employee-family.validator';

const router = express.Router();
router.get('/', authenticateToken, getAllEmployeeFamilies);
router.get('/:id', authenticateToken, getEmployeeFamilyById);
router.post('/', authenticateToken, createEmployeeFamilyValidator, createEmployeeFamily);
router.put('/:id', authenticateToken, updateEmployeeFamilyValidator, updateEmployeeFamily);
router.delete('/:id', authenticateToken, deleteEmployeeFamily);
router.post('/page', authenticateToken, getPageEmployeeFamilies);


export default router;
