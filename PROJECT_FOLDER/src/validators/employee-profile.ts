import { body } from 'express-validator';

export const createEmployeeProfileValidator = [
  body('employee_id')
    .notEmpty().withMessage('Employee ID is required')
    .isInt({ gt: 0 }).withMessage('Employee ID must be a positive integer'),

  body('place_of_birth')
    .optional()
    .isString().withMessage('Place of birth must be a string'),

  body('date_of_birth')
    .optional()
    .isISO8601().withMessage('Date of birth must be a valid date'),

  body('gender')
    .optional()
    .isIn(['Laki-Laki', 'Perempuan']).withMessage('Gender must be "Laki-Laki" or "Perempuan"'),

  body('is_married')
    .optional()
    .isBoolean().withMessage('is_married must be a boolean'),

  body('prof_pict')
    .optional()
    .isString().withMessage('Profile picture must be a string'),

  body('created_by')
    .optional()
    .isString().withMessage('created_by must be a string'),

  body('updated_by')
    .optional()
    .isString().withMessage('updated_by must be a string'),
];

export const updateEmployeeProfileValidator = [
  body('employee_id')
    .notEmpty().withMessage('Employee ID is required')
    .isInt({ gt: 0 }).withMessage('Employee ID must be a positive integer'),

  body('place_of_birth')
    .optional()
    .isString().withMessage('Place of birth must be a string'),

  body('date_of_birth')
    .optional()
    .isISO8601().withMessage('Date of birth must be a valid date'),

  body('gender')
    .optional()
    .isIn(['Laki-Laki', 'Perempuan']).withMessage('Gender must be "Laki-Laki" or "Perempuan"'),

  body('is_married')
    .optional()
    .isBoolean().withMessage('is_married must be a boolean'),

  body('prof_pict')
    .optional()
    .isString().withMessage('Profile picture must be a string'),

  body('created_by')
    .optional()
    .isString().withMessage('created_by must be a string'),

  body('updated_by')
    .optional()
    .isString().withMessage('updated_by must be a string'),
];
