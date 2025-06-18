import { EmployeeProfileCreationAttributes } from '../models/employee-profile';
import { EmployeeProfileRepository } from '../repositories/employee-profile.repository';
import { EmployeeService } from './employee.service';

export class EmployeeProfileService {
  static async getPaginated(page: number, limit: number) {
    const { count, rows } = await EmployeeProfileRepository.findAllPaginated(page, limit);
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
    return EmployeeProfileRepository.findAll();
  }

  static async getById(id: number) {
    return EmployeeProfileRepository.findById(id);
  }

  static async create(data: EmployeeProfileCreationAttributes) {
    const employee = await EmployeeService.getById(data.employee_id);
    if (!employee) throw new Error(`Employee with ID ${data.employee_id} does not exist`);

    const existProfile = await EmployeeProfileRepository.findByEmployeeId(data.employee_id);
    console.log("existProfile", existProfile)
    if (existProfile) throw new Error(`Profile for employee ID ${data.employee_id} already exists. Please update it instead.`);
    
    return EmployeeProfileRepository.create(data);
  }

  static async update(id: number, data: EmployeeProfileCreationAttributes) {
    const employee = await EmployeeService.getById(data.employee_id);
    if (!employee) throw new Error(`Employee with ID ${data.employee_id} does not exist`);

    return EmployeeProfileRepository.update(id, data);
  }

  static async delete(id: number) {
    return EmployeeProfileRepository.delete(id);
  }
}
