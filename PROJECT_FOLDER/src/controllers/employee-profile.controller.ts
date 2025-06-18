import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import {
  badRequest,
  createdResponse,
  errorResponse,
  notFound,
  successResponse
} from '../utils/response';
import { EmployeeProfileService } from '../services/employee-profile.service';

export const getPageEmployeeProfiles = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.body;
    const result = await EmployeeProfileService.getPaginated(Number(page), Number(limit));
    successResponse(res, 'Successfully retrieved employee profiles with pagination', result);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const getAllEmployeeProfiles = async (_req: Request, res: Response) => {
  try {
    const profiles = await EmployeeProfileService.getAll();
    successResponse(res, 'Successfully retrieved all employee profiles', profiles);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const getEmployeeProfileById = async (req: Request, res: Response) => {
  try {
    const profile = await EmployeeProfileService.getById(Number(req.params.id));
    if (!profile) return notFound(res, 'Employee profile not found');
    successResponse(res, 'Successfully retrieved employee profile', profile);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const createEmployeeProfile = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return badRequest(res, 'Validation failed', errors.array());

  try {
    const newProfile = await EmployeeProfileService.create(req.body);
    createdResponse(res, 'Employee profile created successfully', newProfile);
  } catch (err) {
    errorResponse(res, 'Failed to create employee profile', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const updateEmployeeProfile = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return badRequest(res, 'Validation failed', errors.array());

  try {
    const updated = await EmployeeProfileService.update(Number(req.params.id), req.body);
    if (!updated) return notFound(res, 'Employee profile not found');
    successResponse(res, 'Employee profile updated successfully', updated);
  } catch (err) {
    errorResponse(res, 'Failed to update employee profile', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const deleteEmployeeProfile = async (req: Request, res: Response) => {
  try {
    const deleted = await EmployeeProfileService.delete(Number(req.params.id));
    if (!deleted) return notFound(res, 'Employee profile not found');
    successResponse(res, 'Employee profile deleted successfully');
  } catch (err) {
    errorResponse(res, 'Failed to delete employee profile', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};
