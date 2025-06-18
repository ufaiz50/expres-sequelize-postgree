import { EmployeeProfile, EmployeeProfileCreationAttributes } from '../models/employee-profile';

export class EmployeeProfileRepository {
  static async findAllPaginated(page: number, limit: number) {
    const offset = (page - 1) * limit;
    return EmployeeProfile.findAndCountAll({
      limit,
      offset,
      order: [['created_at', 'DESC']],
    });
  }

  static async findAll() {
    return EmployeeProfile.findAll();
  }

  static async findById(id: number) {
    return EmployeeProfile.findByPk(id);
  }

  static async findByEmployeeId(employee_id: number) {
    return EmployeeProfile.findOne({
        where: { employee_id }
    });
  }

  static async create(data: EmployeeProfileCreationAttributes) {
    return EmployeeProfile.create(data);
  }

  static async update(id: number, data: EmployeeProfileCreationAttributes) {
    const record = await EmployeeProfile.findByPk(id);
    if (!record) return null;
    return record.update(data);
  }

  static async delete(id: number) {
    const record = await EmployeeProfile.findByPk(id);
    if (!record) return null;
    await record.destroy();
    return record;
  }
}
