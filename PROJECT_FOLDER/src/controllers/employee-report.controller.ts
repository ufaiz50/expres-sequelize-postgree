import { Request, Response } from 'express';
import { errorResponse, successResponse } from "../utils/response";
import { EmployeeReportService } from "../services/employee-report.service";

export const getAllEmployeeReports = async (_req: Request, res: Response) => {
  try {
    const profiles = await EmployeeReportService.getAll();
    successResponse(res, 'Successfully retrieved all employee profiles', profiles);
  } catch (err) {
    errorResponse(res, 'Internal server error', {
        message: err instanceof Error ? err.message : String(err),
    });
  }
};