// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { forbidden, notFound } from '../utils/response';
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }
  }
}


const JWT_SECRET: Secret = process.env.JWT_SECRET || 'your-secret';


export const generateToken = (
  payload: string | object | Buffer,
  expiresIn: number = 3600
): string => {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, JWT_SECRET as Secret, options);
};

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return notFound(res,'Access token missing');

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return forbidden(res, 'Invalid token');
    req.user = user;
    next();
  });
};
