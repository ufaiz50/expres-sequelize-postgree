import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Employee, EmployeeId } from './employee';

export interface EmployeeProfileAttributes {
  id: number;
  employee_id: number;
  place_of_birth?: string;
  date_of_birth?: Date;
  gender?: "Laki-Laki" | "Perempuan";
  is_married?: boolean;
  prof_pict?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type EmployeeProfilePk = "id";
export type EmployeeProfileId = EmployeeProfile[EmployeeProfilePk];
export type EmployeeProfileOptionalAttributes = "id" | "place_of_birth" | "date_of_birth" | "gender" | "is_married" | "prof_pict" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type EmployeeProfileCreationAttributes = Optional<EmployeeProfileAttributes, EmployeeProfileOptionalAttributes>;

export class EmployeeProfile extends Model<EmployeeProfileAttributes, EmployeeProfileCreationAttributes> implements EmployeeProfileAttributes {
  id!: number;
  employee_id!: number;
  place_of_birth?: string;
  date_of_birth?: Date;
  gender?: "Laki-Laki" | "Perempuan";
  is_married?: boolean;
  prof_pict?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // EmployeeProfile belongsTo Employee via employee_id
  employee!: Employee;
  getEmployee!: Sequelize.BelongsToGetAssociationMixin<Employee>;
  setEmployee!: Sequelize.BelongsToSetAssociationMixin<Employee, EmployeeId>;
  createEmployee!: Sequelize.BelongsToCreateAssociationMixin<Employee>;

  static initModel(sequelize: Sequelize.Sequelize): typeof EmployeeProfile {
    return EmployeeProfile.init({
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
    place_of_birth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM("Laki-Laki","Perempuan"),
      allowNull: true
    },
    is_married: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    prof_pict: {
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
    tableName: 'employee_profile',
    schema: 'public',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        name: "employee_profile_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
