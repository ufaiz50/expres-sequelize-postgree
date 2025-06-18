import { EmployeeFamily, EmployeeFamilyCreationAttributes } from '../models/employee-family';

export class EmployeeFamilyRepository {
  static async findAllPaginated(page: number, limit: number) {
    const offset = (page - 1) * limit;
    return EmployeeFamily.findAndCountAll({
      limit,
      offset,
      order: [['created_at', 'DESC']],
    });
  }

  static async findAll() {
    return EmployeeFamily.findAll();
  }

  static async findById(id: number) {
    return EmployeeFamily.findByPk(id);
  }

  static async create(data: EmployeeFamilyCreationAttributes) {
    return EmployeeFamily.create(data);
  }

  static async update(id: number, data: EmployeeFamilyCreationAttributes) {
    const record = await EmployeeFamily.findByPk(id);
    if (!record) return null;
    return record.update(data);
  }

  static async delete(id: number) {
    const record = await EmployeeFamily.findByPk(id);
    if (!record) return null;
    await record.destroy();
    return record;
  }
}
