// src/db/index.ts
import { Sequelize } from 'sequelize-typescript';
import config from '../config/config';
import { initModels } from '../models/init-models';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

export const Database = new Sequelize({
  ...dbConfig,
});
initModels(Database)
