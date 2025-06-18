import { body } from 'express-validator';

export const createEmployeeFamilyValidator = [
  body('employee_id')
    .notEmpty().withMessage('Employee ID is required')
    .isInt({ gt: 0 }).withMessage('Employee ID must be a positive integer'),

  body('name')
    .notEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be a string'),

  body('identifier')
    .optional()
    .isString().withMessage('Identifier must be a string'),

  body('job')
    .optional()
    .isString().withMessage('Job must be a string'),

  body('place_of_birth')
    .optional()
    .isString().withMessage('Place of birth must be a string'),

  body('date_of_birth')
    .optional()
    .isISO8601().withMessage('Date of birth must be a valid date'),

  body('religion')
    .optional()
    .isIn(['Islam', 'Katolik', 'Buda', 'Protestan', 'Konghucu']).withMessage('Invalid religion'),

  body('is_life')
    .optional()
    .isBoolean().withMessage('is_life must be a boolean'),

  body('is_divorced')
    .optional()
    .isBoolean().withMessage('is_divorced must be a boolean'),

  body('relation_status')
    .optional()
    .isIn(['Suami', 'Istri', 'Anak', 'Anak Sambung']).withMessage('Invalid relation status'),

  body('created_by')
    .optional()
    .isString().withMessage('created_by must be a string'),

  body('updated_by')
    .optional()
    .isString().withMessage('updated_by must be a string'),
];

export const updateEmployeeFamilyValidator = [
  body('employee_id')
    .notEmpty().withMessage('Employee ID is required')
    .isInt({ gt: 0 }).withMessage('Employee ID must be a positive integer'),

  body('name')
    .optional()
    .isString().withMessage('Name must be a string'),

  body('identifier')
    .optional()
    .isString().withMessage('Identifier must be a string'),

  body('job')
    .optional()
    .isString().withMessage('Job must be a string'),

  body('place_of_birth')
    .optional()
    .isString().withMessage('Place of birth must be a string'),

  body('date_of_birth')
    .optional()
    .isISO8601().withMessage('Date of birth must be a valid date'),

  body('religion')
    .optional()
    .isIn(['Islam', 'Katolik', 'Buda', 'Protestan', 'Konghucu']).withMessage('Invalid religion'),

  body('is_life')
    .optional()
    .isBoolean().withMessage('is_life must be a boolean'),

  body('is_divorced')
    .optional()
    .isBoolean().withMessage('is_divorced must be a boolean'),

  body('relation_status')
    .optional()
    .isIn(['Suami', 'Istri', 'Anak', 'Anak Sambung']).withMessage('Invalid relation status'),

  body('created_by')
    .optional()
    .isString().withMessage('created_by must be a string'),

  body('updated_by')
    .optional()
    .isString().withMessage('updated_by must be a string'),
];
