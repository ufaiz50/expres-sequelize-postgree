// src/validators/employee.validator.ts
import { body } from 'express-validator';

export const createEmployeeValidator = [
  body('nik')
    .notEmpty().withMessage('NIK is required')
    .isString().withMessage('NIK must be a string')
    .isLength({ min: 16, max: 16 }).withMessage('NIK must be exactly 16 characters'),

  body('name')
    .notEmpty().withMessage('Name is required')
    .isString().withMessage('NIK must be a string'),

  body('is_active')
    .optional()
    .isBoolean().withMessage('is_active must be a boolean'),

  body('start_date')
    .optional()
    .isISO8601().toDate().withMessage('start_date must be a valid date'),
  
  body('end_date')
    .optional()
    .isISO8601().toDate().withMessage('end_date must be a valid date'),
];


export const updateEmployeeValidator = [
  body('nik')
    .notEmpty().withMessage('NIK is required')
    .isString().withMessage('NIK must be a string')
    .isLength({ min: 16, max: 16 }).withMessage('NIK must be exactly 16 characters'),

  body('name')
    .notEmpty().withMessage('Name is required'),

  body('is_active')
    .optional()
    .isBoolean().withMessage('is_active must be a boolean'),

  body('start_date')
    .optional()
    .isISO8601().toDate().withMessage('start_date must be a valid date'),
  
  body('end_date')
    .optional()
    .isISO8601().toDate().withMessage('end_date must be a valid date'),
];