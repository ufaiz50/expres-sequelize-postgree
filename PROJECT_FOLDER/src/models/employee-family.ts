import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Employee, EmployeeId } from './employee';

export interface EmployeeFamilyAttributes {
  id: number;
  employee_id: number;
  name?: string;
  identifier?: string;
  job?: string;
  place_of_birth?: string;
  date_of_birth?: Date;
  religion?: "Islam" | "Katolik" | "Buda" | "Protestan" | "Konghucu";
  is_life?: boolean;
  is_divorced?: boolean;
  relation_status?: "Suami" | "Istri" | "Anak" | "Anak Sambung";
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type EmployeeFamilyPk = "id";
export type EmployeeFamilyId = EmployeeFamily[EmployeeFamilyPk];
export type EmployeeFamilyOptionalAttributes = "id" | "name" | "identifier" | "job" | "place_of_birth" | "date_of_birth" | "religion" | "is_life" | "is_divorced" | "relation_status" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type EmployeeFamilyCreationAttributes = Optional<EmployeeFamilyAttributes, EmployeeFamilyOptionalAttributes>;

export class EmployeeFamily extends Model<EmployeeFamilyAttributes, EmployeeFamilyCreationAttributes> implements EmployeeFamilyAttributes {
  id!: number;
  employee_id!: number;
  name?: string;
  identifier?: string;
  job?: string;
  place_of_birth?: string;
  date_of_birth?: Date;
  religion?: "Islam" | "Katolik" | "Buda" | "Protestan" | "Konghucu";
  is_life?: boolean;
  is_divorced?: boolean;
  relation_status?: "Suami" | "Istri" | "Anak" | "Anak Sambung";
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // EmployeeFamily belongsTo Employee via employee_id
  employee!: Employee;
  getEmployee!: Sequelize.BelongsToGetAssociationMixin<Employee>;
  setEmployee!: Sequelize.BelongsToSetAssociationMixin<Employee, EmployeeId>;
  createEmployee!: Sequelize.BelongsToCreateAssociationMixin<Employee>;

  static initModel(sequelize: Sequelize.Sequelize): typeof EmployeeFamily {
    return EmployeeFamily.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    identifier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    job: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    place_of_birth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    religion: {
      type: DataTypes.ENUM("Islam","Katolik","Buda","Protestan","Konghucu"),
      allowNull: true
    },
    is_life: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_divorced: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    relation_status: {
      type: DataTypes.ENUM("Suami","Istri","Anak","Anak Sambung"),
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
    tableName: 'employee_family',
    schema: 'public',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        name: "employee_family_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
