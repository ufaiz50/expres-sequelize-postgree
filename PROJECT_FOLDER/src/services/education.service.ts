import { EducationRepository } from '../repositories/education.repository';
import { EducationCreationAttributes } from '../models/education';
import { EmployeeService } from './employee.service';

export class EducationService {
  static async getPaginated(page: number, limit: number) {
    const { count, rows } = await EducationRepository.findAllPaginated(page, limit);
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
    return EducationRepository.findAll();
  }

  static async getById(id: number) {
    return EducationRepository.findById(id);
  }

  static async create(data: EducationCreationAttributes) {
    const employee = await EmployeeService.getById(data.employee_id);
    if (!employee) throw new Error(`Employee with ID ${data.employee_id} does not exist`);

    return EducationRepository.create(data);
  }

  static async update(id: number, data: EducationCreationAttributes) {
    const employee = await EmployeeService.getById(data.employee_id);
    if (!employee) throw new Error(`Employee with ID ${data.employee_id} does not exist`);

    return EducationRepository.update(id, data);
  }

  static async delete(id: number) {
    return EducationRepository.delete(id);
  }
}
