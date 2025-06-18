import { body } from 'express-validator';

export const createEducationValidator = [
  body('employee_id')
    .notEmpty().withMessage('Employee ID is required')
    .isInt({ gt: 0 }).withMessage('Employee ID must be a positive integer'),

  body('name')
    .notEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be a string'),

  body('level')
    .notEmpty().withMessage('Level is required')
    .isIn(['TK', 'SD', 'SMP', 'SMA', 'Strata 1', 'Strata 2', 'Doktor', 'Professor'])
    .withMessage('Invalid education level'),

  body('description')
    .optional()
    .isString().withMessage('Description must be a string'),
];

export const updateEducationValidator = [
  body('employee_id')
    .notEmpty().withMessage('Employee ID is required')
    .isInt({ gt: 0 }).withMessage('Employee ID must be a positive integer'),

  body('name')
    .optional()
    .isString().withMessage('Name must be a string'),

  body('level')
    .optional()
    .isIn(['TK', 'SD', 'SMP', 'SMA', 'Strata 1', 'Strata 2', 'Doktor', 'Professor'])
    .withMessage('Invalid education level'),

  body('description')
    .optional()
    .isString().withMessage('Description must be a string'),

];
