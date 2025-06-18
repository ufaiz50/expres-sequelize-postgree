import express from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { getAllEmployeeReports } from '../controllers/employee-report.controller';

const router = express.Router();
router.get('/', authenticateToken, getAllEmployeeReports);
//router.get('/:id', authenticateToken, getEmployeeProfileById);


export default router;
