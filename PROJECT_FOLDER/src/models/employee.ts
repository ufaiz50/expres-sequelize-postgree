import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Education, EducationId } from './education';
import type { EmployeeFamily, EmployeeFamilyId } from './employee-family';
import type { EmployeeProfile, EmployeeProfileId } from './employee-profile';

export interface EmployeeAttributes {
  id: number;
  nik?: string;
  name?: string;
  is_active?: boolean;
  start_date?: Date;
  end_date?: Date;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type EmployeePk = "id";
export type EmployeeId = Employee[EmployeePk];
export type EmployeeOptionalAttributes = "id" | "nik" | "name" | "is_active" | "start_date" | "end_date" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type EmployeeCreationAttributes = Optional<EmployeeAttributes, EmployeeOptionalAttributes>;

export class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
  id!: number;
  nik?: string;
  name?: string;
  is_active?: boolean;
  start_date?: Date;
  end_date?: Date;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // Employee hasMany Education via employee_id
  educations!: Education[];
  getEducations!: Sequelize.HasManyGetAssociationsMixin<Education>;
  setEducations!: Sequelize.HasManySetAssociationsMixin<Education, EducationId>;
  addEducation!: Sequelize.HasManyAddAssociationMixin<Education, EducationId>;
  addEducations!: Sequelize.HasManyAddAssociationsMixin<Education, EducationId>;
  createEducation!: Sequelize.HasManyCreateAssociationMixin<Education>;
  removeEducation!: Sequelize.HasManyRemoveAssociationMixin<Education, EducationId>;
  removeEducations!: Sequelize.HasManyRemoveAssociationsMixin<Education, EducationId>;
  hasEducation!: Sequelize.HasManyHasAssociationMixin<Education, EducationId>;
  hasEducations!: Sequelize.HasManyHasAssociationsMixin<Education, EducationId>;
  countEducations!: Sequelize.HasManyCountAssociationsMixin;
  // Employee hasMany EmployeeFamily via employee_id
  employee_families!: EmployeeFamily[];
  getEmployee_families!: Sequelize.HasManyGetAssociationsMixin<EmployeeFamily>;
  setEmployee_families!: Sequelize.HasManySetAssociationsMixin<EmployeeFamily, EmployeeFamilyId>;
  addEmployee_family!: Sequelize.HasManyAddAssociationMixin<EmployeeFamily, EmployeeFamilyId>;
  addEmployee_families!: Sequelize.HasManyAddAssociationsMixin<EmployeeFamily, EmployeeFamilyId>;
  createEmployee_family!: Sequelize.HasManyCreateAssociationMixin<EmployeeFamily>;
  removeEmployee_family!: Sequelize.HasManyRemoveAssociationMixin<EmployeeFamily, EmployeeFamilyId>;
  removeEmployee_families!: Sequelize.HasManyRemoveAssociationsMixin<EmployeeFamily, EmployeeFamilyId>;
  hasEmployee_family!: Sequelize.HasManyHasAssociationMixin<EmployeeFamily, EmployeeFamilyId>;
  hasEmployee_families!: Sequelize.HasManyHasAssociationsMixin<EmployeeFamily, EmployeeFamilyId>;
  countEmployee_families!: Sequelize.HasManyCountAssociationsMixin;
  // Employee hasMany EmployeeProfile via employee_id
  employee_profiles!: EmployeeProfile[];
  getEmployee_profiles!: Sequelize.HasManyGetAssociationsMixin<EmployeeProfile>;
  setEmployee_profiles!: Sequelize.HasManySetAssociationsMixin<EmployeeProfile, EmployeeProfileId>;
  addEmployee_profile!: Sequelize.HasManyAddAssociationMixin<EmployeeProfile, EmployeeProfileId>;
  addEmployee_profiles!: Sequelize.HasManyAddAssociationsMixin<EmployeeProfile, EmployeeProfileId>;
  createEmployee_profile!: Sequelize.HasManyCreateAssociationMixin<EmployeeProfile>;
  removeEmployee_profile!: Sequelize.HasManyRemoveAssociationMixin<EmployeeProfile, EmployeeProfileId>;
  removeEmployee_profiles!: Sequelize.HasManyRemoveAssociationsMixin<EmployeeProfile, EmployeeProfileId>;
  hasEmployee_profile!: Sequelize.HasManyHasAssociationMixin<EmployeeProfile, EmployeeProfileId>;
  hasEmployee_profiles!: Sequelize.HasManyHasAssociationsMixin<EmployeeProfile, EmployeeProfileId>;
  countEmployee_profiles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Employee {
    return Employee.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nik: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employee',
    schema: 'public',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        name: "employee_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
