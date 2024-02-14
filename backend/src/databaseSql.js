import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'br8bm2aryf3pbwzf39jq-mysql.services.clever-cloud.com',
    user: 'uquslxxhrmmcnxju',
    password: 'afUdlDQKjd2Bm0Do7nZc',
    database: 'br8bm2aryf3pbwzf39jq'
}).promise()


export const getPool = () => pool ;
