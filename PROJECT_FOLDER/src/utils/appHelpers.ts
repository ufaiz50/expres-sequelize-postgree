import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { JwtPayloadDto } from '../dtos/auth/jwt.dto';
dotenv.config();

export const generateJWTToken = (
  payload: JwtPayloadDto,
  expiresIn: number = 3600
): string => {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, process.env.JWT_SECRET as Secret, options);
};
