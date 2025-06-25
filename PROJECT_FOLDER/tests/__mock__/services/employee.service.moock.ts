import { mockEmployees } from '../data/employee.mock';

export const EmployeeServiceMock = {
  getAll: jest.fn().mockResolvedValue(mockEmployees),

  getPaginated: jest.fn().mockResolvedValue({
    data: mockEmployees,
    meta: {
      totalItems: mockEmployees.length,
      totalPages: 1,
      currentPage: 1,
      pageSize: 10,
    },
  }),

  getById: jest.fn().mockImplementation((id: number) =>
    Promise.resolve(mockEmployees.find(emp => emp.id === id) || null)
  ),

  create: jest.fn().mockImplementation((data) =>
    Promise.resolve({ id: 999, ...data })
  ),

  update: jest.fn().mockImplementation((id, data) =>
    Promise.resolve({ id, ...data })
  ),

  delete: jest.fn().mockResolvedValue(true),
};
