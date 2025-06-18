import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
  // Employee
  await queryInterface.createTable('employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nik: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  // Employee Profile
  await queryInterface.createTable('employee_profile', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    place_of_birth: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    gender: DataTypes.ENUM('Laki-laki', 'Perempuan'),
    is_married: DataTypes.BOOLEAN,
    prof_pict: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  // Education
  await queryInterface.createTable('education', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    name: DataTypes.STRING,
    level: DataTypes.ENUM('TK', 'SD', 'SMP', 'SMA', 'Strata 1', 'Strata 2', 'Doktor', 'Professor'),
    description: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  // Employee Family
  await queryInterface.createTable('employee_family', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    name: DataTypes.STRING,
    identifier: DataTypes.STRING,
    job: DataTypes.STRING,
    place_of_birth: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    religion: DataTypes.ENUM('Islam', 'Kristen', 'Katolik', 'Buda', 'Protestan', 'Konghucu'),
    is_life: DataTypes.BOOLEAN,
    is_divorced: DataTypes.BOOLEAN,
    relation_status: DataTypes.ENUM('Suami/Istri', 'Anak Kandung', 'Anak Sambung'),
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });
}

export async function down(queryInterface: QueryInterface): Promise<void> {
  // Drop in reverse order
  await queryInterface.dropTable('employee_family');
  await queryInterface.dropTable('education');
  await queryInterface.dropTable('employee_profile');
  await queryInterface.dropTable('employee');
}
