import { SQL_HOST, SQL_USER, SQL_PASSWORD, SQL_DB } from './config.js';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config()

const pool = mysql.createPool({
    host: SQL_HOST,
    user: SQL_USER,
    password: SQL_PASSWORD,
    database: SQL_DB
}).promise()


export const getPool = () => pool ;
