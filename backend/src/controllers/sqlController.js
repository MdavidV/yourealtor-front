import mysql from "mysql2";
import { getPool } from "../databaseSql.js";
const pool = getPool();

export const getActivos = async (req, res) => {
  try {
    const [rows] = await pool.query(`
    
    SELECT * FROM Detalle_Activos
    
        `);
    res.send(rows);
  } catch (error) {
    console.log(error);
  }
};
