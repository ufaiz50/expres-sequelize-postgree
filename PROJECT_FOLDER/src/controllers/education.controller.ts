import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import {
  successResponse,
  createdResponse,
  errorResponse,
  badRequest,
  notFound,
} from '../utils/response';
import { EducationService } from '../services/education.service';

export const getPageEducations = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.body;
    const result = await EducationService.getPaginated(Number(page), Number(limit));
    successResponse(res, 'Successfully fetched paginated education records', result);
  } catch (err) {
    errorResponse(res, 'Failed to fetch paginated data', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const getAllEducations = async (_req: Request, res: Response) => {
  try {
    const educations = await EducationService.getAll();
    successResponse(res, 'Success to get all education', educations);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const getEducationById = async (req: Request, res: Response) => {
  try {
    const education = await EducationService.getById(Number(req.params.id));
    if (!education) return notFound(res, 'Education record not found');
    successResponse(res, 'Success to get education by ID', education);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const createEducation = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return badRequest(res, 'Validation failed', errors.array());

  try {
    const newEducation = await EducationService.create(req.body);
    createdResponse(res, 'Success to create education', newEducation);
  } catch (err) {
    errorResponse(res, 'Failed to create education', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const updateEducation = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return badRequest(res, 'Validation failed', errors.array());

  try {
    const updated = await EducationService.update(Number(req.params.id), req.body);
    if (!updated) return notFound(res, 'Education record not found');
    successResponse(res, 'Success to update education', updated);
  } catch (err) {
    errorResponse(res, 'Failed to update education', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};

export const deleteEducation = async (req: Request, res: Response) => {
  try {
    const deleted = await EducationService.delete(Number(req.params.id));
    if (!deleted) return notFound(res, 'Education record not found');
    successResponse(res, 'Success to delete education');
  } catch (err) {
    errorResponse(res, 'Failed to delete education', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};
