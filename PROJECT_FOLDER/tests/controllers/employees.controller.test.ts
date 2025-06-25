import { EmployeeServiceMock } from '../__mock__/services/employee.service.moock'

jest.mock('../../src/services/employee.service', () => ({
  EmployeeService: EmployeeServiceMock,
}));

import request from 'supertest';
import app from '../../src/app';
import { generateJWTToken } from '../../src/utils/appHelpers';
import { JwtPayloadDto } from '../../src/dtos/auth/jwt.dto';

describe('Employee Controller with Auth', () => {
  const token = generateJWTToken({ id: 123, role: 'admin' } as JwtPayloadDto);

  describe('GET /api/employees', () => {
    it('should return all employees', async () => {
      const mockEmployees = [{ id: 1, name: 'John Doe' }];
      (EmployeeServiceMock.getAll as jest.Mock).mockResolvedValue(mockEmployees);

      const res = await request(app)
        .get('/api/employees')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        success: true,
        message: 'Successfully retrieved all employees',
        data: mockEmployees,
      });
    });
  });

  describe('GET /api/employees/:id', () => {
    it('should return employee by ID', async () => {
      (EmployeeServiceMock.getById as jest.Mock).mockResolvedValue({ id: 1, name: 'John' });

      const res = await request(app)
        .get('/api/employees/1')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        success: true,
        message: 'Successfully retrieved employee by ID',
        data: { id: 1, name: 'John' },
      });
    });
  });

  describe('POST /api/employees', () => {
    it('should create a new employee', async () => {
      const newEmp = {
        nik: "9876543210987654",
        name: "Jane Doe",
        is_active: false,
        start_date: "2023-06-01",
        end_date: "2024-06-01"
      };
      (EmployeeServiceMock.create as jest.Mock).mockResolvedValue({ id: 1, ...newEmp });

      const res = await request(app)
        .post('/api/employees')
        .set('Authorization', `Bearer ${token}`)
        .send(newEmp);

      expect(res.status).toBe(201);
      expect(res.body).toEqual({
        success: true,
        message: 'Successfully created employee',
        data: { id: 1, ...newEmp },
      });
    });
  });

  describe('PUT /api/employees/:id', () => {
    it('should update an employee', async () => {
      const updateData = {
        nik: "9876543210987654",
        name: "Jane Doe testing",
        is_active: false,
        start_date: "2023-06-01",
        end_date: "2024-06-01"
      };
      (EmployeeServiceMock.update as jest.Mock).mockResolvedValue({ id: 1, ...updateData });

      const res = await request(app)
        .put('/api/employees/1')
        .set('Authorization', `Bearer ${token}`)
        .send(updateData);

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        success: true,
        message: 'Successfully updated employee',
        data: { id: 1, ...updateData },
      });
    });
  });

  describe('DELETE /api/employees/:id', () => {
    it('should delete an employee', async () => {
      (EmployeeServiceMock.delete as jest.Mock).mockResolvedValue(true);

      const res = await request(app)
        .delete('/api/employees/1')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        success: true,
        message: 'Successfully deleted employee',
      });
    });
  });

  describe('Auth Middleware', () => {
    it('should return 404 if token is missing', async () => {
      const res = await request(app).get('/api/employees');
      expect(res.status).toBe(404);
      expect(res.body.message).toBe('Access token missing');
    });

    it('should return 403 if token is invalid', async () => {
      const res = await request(app)
        .get('/api/employees')
        .set('Authorization', 'Bearer invalid.token');

      expect(res.status).toBe(403);
      expect(res.body.message).toBe('Invalid token');
    });
  });
});
