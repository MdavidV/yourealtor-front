import { SQL_HOST, SQL_USER, SQL_PASSWORD, SQL_DB } from './config';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config()

const pool = mysql.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DB
}).promise()


export const getPool = () => pool ;
