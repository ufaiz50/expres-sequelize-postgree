import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import {
  badRequest,
  createdResponse,
  errorResponse,
  notFound,
  successResponse,
} from '../utils/response';
import { EmployeeService } from '../services/employee.service';

export const getPageEmployees = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.body;
    const result = await EmployeeService.getPaginated(Number(page), Number(limit));
    successResponse(res, 'Successfully retrieved employees with pagination', result);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const getAllEmployees = async (_req: Request, res: Response) => {
  try {
    const employees = await EmployeeService.getAll();
    successResponse(res, 'Successfully retrieved all employees', employees);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee = await EmployeeService.getById(Number(req.params.id));
    if (!employee) return notFound(res, 'Employee not found');
    successResponse(res, 'Successfully retrieved employee by ID', employee);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return badRequest(res, 'Validation failed', errors.array());

  try {
    const newEmployee = await EmployeeService.create(req.body);
    createdResponse(res, 'Successfully created employee', newEmployee);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return badRequest(res, 'Validation failed', errors.array());

  try {
    const updated = await EmployeeService.update(Number(req.params.id), req.body);
    if (!updated) return notFound(res, 'Employee not found');
    successResponse(res, 'Successfully updated employee', updated);
  } catch (err: any) {
    errorResponse(res, 'Failed to update employee', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const deleted = await EmployeeService.delete(Number(req.params.id));
    if (!deleted) return notFound(res, 'Employee not found');
    successResponse(res, 'Successfully deleted employee');
  } catch (err) {
    errorResponse(res, 'Failed to delete employee', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};
