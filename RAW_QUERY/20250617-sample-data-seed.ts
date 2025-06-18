import { QueryInterface } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface) => {
    // Insert employees
    await queryInterface.bulkInsert('employee', [
      {
        id: 1,
        nik: '11012',
        name: 'Budi',
        is_active: true,
        start_date: '2022-12-12',
        end_date: '2029-12-12',
      },
      {
        id: 2,
        nik: '11013',
        name: 'Jarot',
        is_active: true,
        start_date: '2021-09-01',
        end_date: '2028-09-01',
      },
    ]);

    // Insert education
    await queryInterface.bulkInsert('education', [
      {
        id: 1,
        employee_id: 1,
        name: 'SMKN 7 Jakarta',
        level: 'SMA',
        description: 'Sekolah Menengah Atas',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date('2022-12-12'),
        updated_at: new Date('2022-12-12'),
      },
      {
        id: 2,
        employee_id: 2,
        name: 'Universitas Negeri Jakarta',
        level: 'Strata 1',
        description: 'Sarjana',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date('2022-12-12'),
        updated_at: new Date('2022-12-12'),
      },
    ]);

    // Insert employee profile
    await queryInterface.bulkInsert('employee_profile', [
      {
        id: 1,
        employee_id: 1,
        place_of_birth: 'Jakarta',
        date_of_birth: '1997-05-02',
        gender: 'Laki-Laki',
        is_married: true,
        prof_pict: null,
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date('2022-12-12'),
        updated_at: new Date('2022-12-12'),
      },
      {
        id: 2,
        employee_id: 2,
        place_of_birth: 'Sukabumi',
        date_of_birth: '1996-05-02',
        gender: 'Laki-Laki',
        is_married: false,
        prof_pict: null,
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date('2022-12-12'),
        updated_at: new Date('2022-12-12'),
      },
    ]);

    // Insert employee family
    await queryInterface.bulkInsert('employee_family', [
      {
        id: 1,
        employee_id: 1,
        name: 'Ilami',
        identifier: '2100504199500002',
        job: 'Ibu Rumah Tangga',
        place_of_birth: 'Depasar',
        date_of_birth: '1995-10-17',
        religion: 'Islam',
        is_life: true,
        is_divorced: false,
        relation_status: 'Istri',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date('2022-12-12'),
        updated_at: new Date('2022-12-12'),
      },
      {
        id: 2,
        employee_id: 1,
        name: 'Qian',
        identifier: '2100504190001',
        job: 'Pelajar',
        place_of_birth: 'Bangalan',
        date_of_birth: '2008-10-17',
        religion: 'Islam',
        is_life: true,
        is_divorced: false,
        relation_status: 'Anak',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date('2022-12-12'),
        updated_at: new Date('2022-12-12'),
      },
      {
        id: 3,
        employee_id: 1,
        name: 'Sighae',
        identifier: '2100504190005',
        job: 'Pelajar',
        place_of_birth: 'Bangalan',
        date_of_birth: '2008-10-17',
        religion: 'Islam',
        is_life: true,
        is_divorced: false,
        relation_status: 'Anak',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date('2022-12-12'),
        updated_at: new Date('2022-12-12'),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('employee_family', {}, {});
    await queryInterface.bulkDelete('employee_profile', {}, {});
    await queryInterface.bulkDelete('education', {}, {});
    await queryInterface.bulkDelete('employee', {}, {});
  },
};
