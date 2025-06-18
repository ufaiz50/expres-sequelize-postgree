import { Response } from 'express';
import { JsonResponse } from '../types/response';

export const successResponse = <T>(
  res: Response<JsonResponse<T>>,
  message: string,
  data?: T
) => {
  return res.status(200).json({ success: true, message, data });
};

export const createdResponse = <T>(
  res: Response<JsonResponse<T>>,
  message: string,
  data?: T
) => {
  return res.status(201).json({ success: true, message, data });
};

export const badRequest = (
  res: Response<JsonResponse<null>>,
  message: string,
  error?: any
) => {
  return res.status(400).json({ success: false, message, error });
};

export const forbidden = (
  res: Response<JsonResponse<null>>,
  message: string = 'Forbidden'
) => {
  return res.status(403).json({ success: false, message });
};


export const notFound = (
  res: Response<JsonResponse<null>>,
  message: string
) => {
  return res.status(404).json({ success: false, message });
};

export const errorResponse = (
  res: Response<JsonResponse<null>>,
  message: string,
  error: any = null,
  code: number = 500
) => {
  return res.status(code).json({ success: false, message, error });
};
