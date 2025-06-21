// src/config/config.ts
import { SequelizeOptions } from 'sequelize-typescript';
import dotenv from 'dotenv';
dotenv.config();

const config: { [key: string]: SequelizeOptions } = {
  development: {
    username: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    database: process.env.DB_NAME!,
    host: process.env.DB_HOST!,
    dialect: 'postgres',
  },
  testing: {
    username: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    database: process.env.DB_NAME!,
    host: process.env.DB_HOST!,
    dialect: 'postgres',
  },
  p: {
    username: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    database: process.env.DB_NAME!,
    host: process.env.DB_HOST!,
    dialect: 'postgres',
  },
};


export = config;
