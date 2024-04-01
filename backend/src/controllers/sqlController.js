import { pool } from "../databaseSql.js";

export const getCities = async (req, res) => {
  try {
    const [rows] = await pool.query(`
          SELECT * FROM Ciudades
        `);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getActivos = async (req, res) => {
  // try {
  //   const [ rows ] = await pool.query(`
  //     SELECT A.*, C.Nombre_Servicio AS Tipo_Servicio, D.Tipo_Activo
  //     FROM Detalle_Activos A
  //     INNER JOIN Detalle_Activo_Tipos_Servicios B
  //     ON A.idDetalle_Activos = B.Detalle_Activos_idDetalle_Activos
  //     INNER JOIN Tipos_de_Servicio C
  //     ON B.Tipos_de_Servicio_idTipos_de_Servicio = C.idTipos_de_Servicio
  //     INNER JOIN Activos D
  //     ON A.Activos_Id_Activo = D.Id_Activo
  //   `);
  //   res.json(rows);
  // } catch (error) {
  //   return res.status(500).json({ message: error.message });
  // }
};

export const getActivo = async (req, res) => {
  // const idDetalleActivos = parseInt(req.params.id, 10);
  // try {
  //     const [ result ] = await pool.query(`
  //       SELECT A.*, C.Nombre_Servicio AS Tipo_Servicio, D.Tipo_Activo
  //       FROM Detalle_Activos A
  //       INNER JOIN Detalle_Activo_Tipos_Servicios B
  //       ON A.idDetalle_Activos = B.Detalle_Activos_idDetalle_Activos
  //       INNER JOIN Tipos_de_Servicio C
  //       ON B.Tipos_de_Servicio_idTipos_de_Servicio = C.idTipos_de_Servicio
  //       INNER JOIN Activos D
  //       ON A.Activos_Id_Activo = D.Id_Activo
  //       WHERE idDetalle_Activos = ?
  //       `, [idDetalleActivos])
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

export const updateActivo = async (req, res) => {
  console.log("updateActivo");
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
  console.log("deleteActivo");
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

export const createActivo = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    
  }
}


export const getTable = async (req, res) => {
  try {
    const { tableName } = req.query;
    const getTableResult = await pool.query(`SELECT * FROM ${tableName}`);
    res.status(200).json(getTableResult);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const deleteField = async (req, res) => {
  try {
    const { tableName, idField } = req.params;
    const deleteFieldResult = await pool.query(
      `DELETE FROM ${tableName} WHERE id${tableName} = ${idField}`
    );
    res.status(200).json(deleteFieldResult);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const createField = async (req, res) => {
  const tableConfigs = {
    Caracteristicas_Internas: {
      fieldName: "Nombre_Caracteristica",
    },
    Caracteristicas_Externas: {
      fieldName: "Nombre_Caracteristica",
    },
    Periodizidad: {
      fieldName: "Tipo_De_Periodo",
    },
    Ciudades: {
      fieldName: "Ciudad",
    },
    Tipo_De_Negocio: {
      fieldName: "Nombre_Tipo_De_Negocio",
    },
    Tipo_Activo: {
      fieldName: "Nombre_Tipo_Activo",
    },
  };

  const { tableName, data } = req.body.data;

  console.log(tableName, data);


  if (!tableConfigs[tableName]) {
    return res.status(404).json({ message: "Tabla no encontrada" });
  }

  const config = tableConfigs[tableName];

  try {
    const createRecord = await pool.query(
      `INSERT INTO ${tableName} (${config.fieldName}) VALUES ("${data}")`
    );

    if (createRecord)
      return res.status(200).json({ message: "Campo creado con exito" });
  } catch (error) {
    return res.status(400).json({message: 'error al crear registro', error});
  }
};
