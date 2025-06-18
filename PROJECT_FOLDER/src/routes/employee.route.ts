import express from 'express';
import { createEmployee, deleteEmployee, getAllEmployees, getEmployeeById, getPageEmployees, updateEmployee } from '../controllers/employee.controller';
import { createEmployeeValidator, updateEmployeeValidator } from '../validators/employee.validator';
import { authenticateToken } from '../middleware/auth.middleware';

const router = express.Router();
router.get('/', authenticateToken, getAllEmployees);
router.get('/:id', authenticateToken, getEmployeeById);
router.post('/', authenticateToken, createEmployeeValidator, createEmployee);
router.put('/:id', authenticateToken, updateEmployeeValidator, updateEmployee);
router.delete('/:id', authenticateToken, deleteEmployee);
router.post('/page', authenticateToken, getPageEmployees);


export default router;
