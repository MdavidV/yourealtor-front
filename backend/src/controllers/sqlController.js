import { pool } from '../databaseSql.js';

export const getCities= async (req, res) => {
    try{
      const [rows] = await pool.query( `
          SELECT * FROM Ciudades
        `)
      res.json(rows);
    }
   catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export const getActivos = async (req, res) => {   
    try {
      const [ rows ] = await pool.query(`
        SELECT A.*, C.Nombre_Servicio AS Tipo_Servicio, D.Tipo_Activo
        FROM Detalle_Activos A
        INNER JOIN Detalle_Activo_Tipos_Servicios B
        ON A.idDetalle_Activos = B.Detalle_Activos_idDetalle_Activos
        INNER JOIN Tipos_de_Servicio C
        ON B.Tipos_de_Servicio_idTipos_de_Servicio = C.idTipos_de_Servicio
        INNER JOIN Activos D
        ON A.Activos_Id_Activo = D.Id_Activo
      `);
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export const getActivo = async (req, res) => {
    const idDetalleActivos = parseInt(req.params.id, 10);
    try {
        const [ result ] = await pool.query(`
          SELECT A.*, C.Nombre_Servicio AS Tipo_Servicio, D.Tipo_Activo
          FROM Detalle_Activos A
          INNER JOIN Detalle_Activo_Tipos_Servicios B
          ON A.idDetalle_Activos = B.Detalle_Activos_idDetalle_Activos
          INNER JOIN Tipos_de_Servicio C
          ON B.Tipos_de_Servicio_idTipos_de_Servicio = C.idTipos_de_Servicio
          INNER JOIN Activos D
          ON A.Activos_Id_Activo = D.Id_Activo
          WHERE idDetalle_Activos = ?
          
          
          `, [idDetalleActivos])
        
        if(result.length === 0){
            return res.status(404).json({
                message: "Activo no encontrado"
            });
        }

        res.json(result[0]);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  };

export const updateActivo = async (req, res) => {
    console.log('updateActivo');
    // const idDetalleActivos = parseInt(req.params.id, 10);
    // try {
    //     const [ result ] = await pool.query('UPDATE Detalle_Activos SET ? WHERE idDetalle_Activos = ?', [req.body, idDetalleActivos])
        
    //     if(result.length === 0){
    //         return res.status(404).json({
    //             message: "Activo no encontrado"
    //         });
    //     }

    //    return res.json(result);
        
    // } catch (error) {
    //     return res.status(500).json({ message: error.message });
    // }
  };

export const deleteActivo = async (req, res) => {
    console.log('deleteActivo');
    // const idDetalleActivos = parseInt(req.params.id, 10);
    // try {
    //     const [ result ] = await pool.query('DELETE * FROM Detalle_Activos WHERE idDetalle_Activos = ?', [idDetalleActivos])
        
    //     if(result.length === 0){
    //         return res.status(404).json({
    //             message: "Activo no encontrado"
    //         });
    //     }

    //     res.json(result[0]);
        
    // } catch (error) {
    //     return res.status(500).json({ message: error.message });
    // }
  };