import { SQL_HOST, SQL_USER, SQL_PASSWORD, SQL_DB } from './config.js';
import dotenv from 'dotenv';
import { createPool } from 'mysql2/promise';

dotenv.config();
export const pool = createPool({
    host: SQL_HOST,
    user: SQL_USER,
    password: SQL_PASSWORD,
    database: SQL_DB
})