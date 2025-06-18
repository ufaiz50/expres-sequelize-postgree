import { EmployeeFamilyCreationAttributes } from '../models/employee-family';
import { EmployeeFamilyRepository } from '../repositories/employee-family.repository';
import { EmployeeService } from './employee.service';

export class EmployeeFamilyService {
  static async getPaginated(page: number, limit: number) {
    const { count, rows } = await EmployeeFamilyRepository.findAllPaginated(page, limit);
    const totalPages = Math.ceil(count / limit);
    return {
      data: rows,
      meta: {
        totalItems: count,
        totalPages,
        currentPage: page,
        pageSize: limit,
      },
    };
  }

  static async getAll() {
    return EmployeeFamilyRepository.findAll();
  }

  static async getById(id: number) {
    return EmployeeFamilyRepository.findById(id);
  }

  static async create(data: EmployeeFamilyCreationAttributes) {
    const employee = await EmployeeService.getById(data.employee_id);
    if (!employee) throw new Error(`Employee with ID ${data.employee_id} does not exist`);
    
    return EmployeeFamilyRepository.create(data);
  }

  static async update(id: number, data: EmployeeFamilyCreationAttributes) {
    const employee = await EmployeeService.getById(data.employee_id);
    if (!employee) throw new Error(`Employee with ID ${data.employee_id} does not exist`);
    
    return EmployeeFamilyRepository.update(id, data);
  }

  static async delete(id: number) {
    return EmployeeFamilyRepository.delete(id);
  }
}
