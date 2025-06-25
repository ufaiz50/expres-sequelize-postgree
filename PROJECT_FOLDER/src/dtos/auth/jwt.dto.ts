export class JwtPayloadDto {
  id!: number;
  username!: string;
  role?: string;
  iat?: number;
  exp?: number;
}