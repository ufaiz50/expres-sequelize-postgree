import type { Sequelize } from "sequelize";
import { SequelizeMeta as _SequelizeMeta } from "./sequelize-meta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./sequelize-meta";
import { Education as _Education } from "./education";
import type { EducationAttributes, EducationCreationAttributes } from "./education";
import { Employee as _Employee } from "./employee";
import type { EmployeeAttributes, EmployeeCreationAttributes } from "./employee";
import { EmployeeFamily as _EmployeeFamily } from "./employee-family";
import type { EmployeeFamilyAttributes, EmployeeFamilyCreationAttributes } from "./employee-family";
import { EmployeeProfile as _EmployeeProfile } from "./employee-profile";
import type { EmployeeProfileAttributes, EmployeeProfileCreationAttributes } from "./employee-profile";

export {
  _SequelizeMeta as SequelizeMeta,
  _Education as Education,
  _Employee as Employee,
  _EmployeeFamily as EmployeeFamily,
  _EmployeeProfile as EmployeeProfile,
};

export type {
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
  EducationAttributes,
  EducationCreationAttributes,
  EmployeeAttributes,
  EmployeeCreationAttributes,
  EmployeeFamilyAttributes,
  EmployeeFamilyCreationAttributes,
  EmployeeProfileAttributes,
  EmployeeProfileCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const SequelizeMeta = _SequelizeMeta.initModel(sequelize);
  const Education = _Education.initModel(sequelize);
  const Employee = _Employee.initModel(sequelize);
  const EmployeeFamily = _EmployeeFamily.initModel(sequelize);
  const EmployeeProfile = _EmployeeProfile.initModel(sequelize);

  Education.belongsTo(Employee, { as: "employee", foreignKey: "employee_id"});
  Employee.hasMany(Education, { as: "educations", foreignKey: "employee_id"});
  EmployeeFamily.belongsTo(Employee, { as: "employee", foreignKey: "employee_id"});
  Employee.hasMany(EmployeeFamily, { as: "employee_families", foreignKey: "employee_id"});
  EmployeeProfile.belongsTo(Employee, { as: "employee", foreignKey: "employee_id"});
  Employee.hasMany(EmployeeProfile, { as: "employee_profiles", foreignKey: "employee_id"});

  return {
    SequelizeMeta: SequelizeMeta,
    Education: Education,
    Employee: Employee,
    EmployeeFamily: EmployeeFamily,
    EmployeeProfile: EmployeeProfile,
  };
}
