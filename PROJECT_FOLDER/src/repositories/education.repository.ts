import { Education, EducationCreationAttributes } from '../models/education';

export class EducationRepository {
  static async findAllPaginated(page: number, limit: number) {
    const offset = (page - 1) * limit;
    return Education.findAndCountAll({
      limit,
      offset,
      order: [['created_at', 'DESC']],
    });
  }

  static async findAll() {
    return Education.findAll();
  }

  static async findById(id: number) {
    return Education.findByPk(id);
  }

  static async create(data: EducationCreationAttributes) {
    return Education.create(data);
  }

  static async update(id: number, data: EducationCreationAttributes) {
    const education = await Education.findByPk(id);
    if (!education) return null;
    return education.update(data);
  }

  static async delete(id: number) {
    const education = await Education.findByPk(id);
    if (!education) return null;
    await education.destroy();
    return education;
  }
}
