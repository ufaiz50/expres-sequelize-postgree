import express from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { createEmployeeProfile, deleteEmployeeProfile, getAllEmployeeProfiles, getEmployeeProfileById, getPageEmployeeProfiles, updateEmployeeProfile } from '../controllers/employee-profile.controller';
import { createEmployeeProfileValidator, updateEmployeeProfileValidator } from '../validators/employee-profile';

const router = express.Router();
router.get('/', authenticateToken, getAllEmployeeProfiles);
router.get('/:id', authenticateToken, getEmployeeProfileById);
router.post('/', authenticateToken, createEmployeeProfileValidator, createEmployeeProfile);
router.put('/:id', authenticateToken, updateEmployeeProfileValidator, updateEmployeeProfile);
router.delete('/:id', authenticateToken, deleteEmployeeProfile);
router.post('/page', authenticateToken, getPageEmployeeProfiles);


export default router;
