import express from 'express';
import employeeRoutes from './employee.route';
import employeeFamiliyRoutes from './employee-family.route';
import employeeProfileRoutes from './employee-profile.route';
import educationRoutes from './education.route';
import employeeReportRoutes from './employee-report.route';

const router = express.Router();

// Mount individual route modules
/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get all employees
 *     tags: [Employees]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
router.use('/employees', employeeRoutes);
router.use('/employee-families', employeeFamiliyRoutes);
router.use('/employee-profiles', employeeProfileRoutes);
router.use('/educations', educationRoutes);
router.use('/employee-reports', employeeReportRoutes);

export default router;
