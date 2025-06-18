import { Employee, EmployeeCreationAttributes } from '../models/employee';

export class EmployeeRepository {
  static async findAllPaginated(page: number, limit: number) {
    const offset = (page - 1) * limit;
    return Employee.findAndCountAll({
      limit,
      offset,
      order: [['created_at', 'DESC']],
    });
  }

  static async findAll() {
    return Employee.findAll();
  }

  static async findById(id: number) {
    return Employee.findByPk(id);
  }

  static async findByNIK(nik: string) {
    const normalizedNik = nik.trim().toLowerCase();
    return Employee.findOne({
        where: { nik : normalizedNik}
    });
  }

  static async create(data: EmployeeCreationAttributes) {
    return Employee.create(data);
  }

  static async update(id: number, data: EmployeeCreationAttributes) {
    const employee = await Employee.findByPk(id);
    if (!employee) return null;
    return employee.update(data);
  }

  static async delete(id: number) {
    const employee = await Employee.findByPk(id);
    if (!employee) return null;
    await employee.destroy();
    return employee;
  }
}
