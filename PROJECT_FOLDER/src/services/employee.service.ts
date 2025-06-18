import { EmployeeCreationAttributes } from '../models/employee';
import { EmployeeRepository } from '../repositories/employee.repository';

export class EmployeeService {
  static async getPaginated(page: number, limit: number) {
    const { count, rows } = await EmployeeRepository.findAllPaginated(page, limit);
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
    return EmployeeRepository.findAll();
  }

  static async getById(id: number) {
    return EmployeeRepository.findById(id);
  }

  static async create(data: EmployeeCreationAttributes) {
    if(!data.nik) throw new Error("NIK is required. Please provide a valid 16-character NIK.");

    var existNIK = await EmployeeRepository.findByNIK(data.nik)
    if(existNIK) throw new Error(`Employee with NIK "${data.nik}" already exists. Please use a unique NIK.`);

    return EmployeeRepository.create(data);
  }

  static async update(id: number, data: EmployeeCreationAttributes) {
    return EmployeeRepository.update(id, data);
  }

  static async delete(id: number) {
    return EmployeeRepository.delete(id);
  }
}
