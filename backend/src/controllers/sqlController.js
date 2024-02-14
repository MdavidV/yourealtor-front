import mysql from "mysql2";
import { getPool } from "../databaseSql";
const pool = getPool();

export const getActivos = async (req, res) => {
  try {
    const [rows] = await pool.query(`
    
    SELECT * FROM Activos
    
        `);
    res.send(rows);
  } catch (error) {
    console.log(error);
  }
};
