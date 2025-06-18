import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import {
  successResponse,
  createdResponse,
  notFound,
  badRequest,
  errorResponse
} from '../utils/response';
import { EmployeeFamilyService } from '../services/employee-family.service';

export const getPageEmployeeFamilies = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.body;
    const result = await EmployeeFamilyService.getPaginated(Number(page), Number(limit));
    successResponse(res, 'Successfully retrieved employee families with pagination', result);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const getAllEmployeeFamilies = async (_req: Request, res: Response) => {
  try {
    const families = await EmployeeFamilyService.getAll();
    successResponse(res, 'Success to get all employee families', families);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const getEmployeeFamilyById = async (req: Request, res: Response) => {
  try {
    const family = await EmployeeFamilyService.getById(Number(req.params.id));
    if (!family) return notFound(res, 'Employee family not found');
    successResponse(res, 'Success to get employee family by ID', family);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const createEmployeeFamily = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return badRequest(res, 'Validation error', errors.array());

  try {
    const newFamily = await EmployeeFamilyService.create(req.body);
    createdResponse(res, 'Success to create employee family', newFamily);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const updateEmployeeFamily = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return badRequest(res, 'Validation error', errors.array());

  try {
    const updated = await EmployeeFamilyService.update(Number(req.params.id), req.body);
    if (!updated) return notFound(res, 'Employee family not found');
    successResponse(res, 'Success to update employee family', updated);
  } catch (err) {
    errorResponse(res, 'Failed to update employee family', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const deleteEmployeeFamily = async (req: Request, res: Response) => {
  try {
    const deleted = await EmployeeFamilyService.delete(Number(req.params.id));
    if (!deleted) return notFound(res, 'Employee family not found');
    successResponse(res, 'Success to delete employee family');
  } catch (err) {
    errorResponse(res, 'Failed to delete employee family', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};
