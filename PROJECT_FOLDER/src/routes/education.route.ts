import express from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { createEducation, deleteEducation, getAllEducations, getEducationById, getPageEducations, updateEducation } from '../controllers/education.controller';
import { createEducationValidator, updateEducationValidator } from '../validators/education.validator';

const router = express.Router();
router.get('/', authenticateToken, getAllEducations);
router.get('/:id', authenticateToken, getEducationById);
router.post('/', authenticateToken, createEducationValidator, createEducation);
router.put('/:id', authenticateToken, updateEducationValidator, updateEducation);
router.delete('/:id', authenticateToken, deleteEducation);
router.post('/page', authenticateToken, getPageEducations);


export default router;
