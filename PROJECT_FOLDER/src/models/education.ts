import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Employee, EmployeeId } from './employee';

export interface EducationAttributes {
  id: number;
  employee_id: number;
  name?: string;
  level?: "TK" | "SD" | "SMP" | "SMA" | "Strata 1" | "Strata 2" | "Doktor" | "Professor";
  description?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type EducationPk = "id";
export type EducationId = Education[EducationPk];
export type EducationOptionalAttributes = "id" | "name" | "level" | "description" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type EducationCreationAttributes = Optional<EducationAttributes, EducationOptionalAttributes>;

export class Education extends Model<EducationAttributes, EducationCreationAttributes> implements EducationAttributes {
  id!: number;
  employee_id!: number;
  name?: string;
  level?: "TK" | "SD" | "SMP" | "SMA" | "Strata 1" | "Strata 2" | "Doktor" | "Professor";
  description?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // Education belongsTo Employee via employee_id
  employee!: Employee;
  getEmployee!: Sequelize.BelongsToGetAssociationMixin<Employee>;
  setEmployee!: Sequelize.BelongsToSetAssociationMixin<Employee, EmployeeId>;
  createEmployee!: Sequelize.BelongsToCreateAssociationMixin<Employee>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Education {
    return Education.init({
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
    level: {
      type: DataTypes.ENUM("TK","SD","SMP","SMA","Strata 1","Strata 2","Doktor","Professor"),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
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
    tableName: 'education',
    schema: 'public',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        name: "education_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
