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
  try {
    const [rows] = await pool.query(`
    SELECT 
    DA.Activo_idActivo,
    DA.Titulo_Del_Inmueble,
    CASE 
        WHEN DA.Precio_Venta > 0 THEN DA.Precio_Venta
        WHEN DA.Precio_Alquiler > 0 THEN DA.Precio_Alquiler
        ELSE 0 
    END AS Precio,
    DA.Estado_Propiedad,
    DA.Alcobas,
    DA.Baños,
    DA.Area_Total,
    T.Nombre_Tipo_Activo AS Tipo_Activo,
    TN.Nombre_Tipo_De_Negocio AS Tipo_Negocio,
    DA.Ciudad,
    DA.Imagenes
FROM 
    Detalle_Activos DA
JOIN 
    Activo A ON DA.Activo_idActivo = A.idActivo
JOIN 
    Tipo_Activo T ON DA.Tipo_Activo_idTipo_Activo = T.idTipo_Activo
JOIN 
    Tipo_De_Negocio_Detalle_Activo TNDA ON DA.idDetalle_Activos = TNDA.Detalle_Activos_idDetalle_Activos
JOIN 
    Tipo_De_Negocio TN ON TNDA.Tipo_De_Negocio_idTipo_De_Negocio = TN.idTipo_De_Negocio;



  
    `);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
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
  // Parsear el cuerpo de la solicitud si es necesario
  const jsonFields = [
    "ownerInfo",
    "basicInfo",
    "description",
    "location",
    "internalChars",
    "externalChars",
  ];
  jsonFields.forEach((field) => {
    if (req.body[field]) {
      req.body[field] = JSON.parse(req.body[field]);
    }
  });

  console.log(req.body);
  try {
    // Comenzar la transacción
    const connection = await pool.getConnection(); // Obtener una conexión del pool
    try {
      await connection.beginTransaction(); // Comenzar la transacción

      // Insertar propietario
      const ownerData = req.body.ownerInfo;
      const [ownerResult] = await connection.query(
        "INSERT INTO Propietarios SET ?",
        [ownerData]
      );

      // PREPARAR DATOS PARA LA INSERCION EN LA TABLA ACTIVOS

      const {
        basicInfo,
        description,
        location,
        images,
        internalChars,
        externalChars,
      } = req.body;
      const newActivo = {
        Propietarios_idPropietarios: ownerResult.insertId, // ID del propietario insertado anteriormente
        Usuario_Creacion: "usuario", // Debes reemplazarlo con el usuario actual
        Usuario_Actualizacion: "usuario", // Debes reemplazarlo con el usuario actual
        Fecha_Creacion: new Date(), // La fecha actual
        Fecha_Actualizacion: new Date(), // La fecha actual
        Encargado_Del_Activo: basicInfo.Encargado_Del_Activo,
        Estado_Activo: basicInfo.Estado_Activo,
      };

      const [activoResult] = await connection.query(
        "INSERT INTO Activo SET ?",
        [newActivo]
      ); // Insertar Activo

      // PREPARAR DATOS PARA LA INSERCION EN LA TABLA DETALLE ACTIVOS

      const detailsActivo = {
        Activo_idActivo: activoResult.insertId,
        Tipo_Activo_idTipo_Activo: basicInfo.Nombre_Tipo_Activo,
        Titulo_Del_Inmueble: basicInfo.Titulo_Del_Inmueble,
        Matricula_Inmobiliaria: parseInt(basicInfo.Matricula_Inmobiliaria),
        Precio_Venta: parseInt(basicInfo.Precio_Venta),
        Precio_Alquiler: parseInt(basicInfo.Precio_Alquiler),
        Valor_Administracion: parseInt(basicInfo.Valor_Administracion),
        Estado_Propiedad: basicInfo.Estado_Propiedad,
        Año_Construccion: parseInt(basicInfo.Año_Construccion),
        Alcobas: parseInt(basicInfo.Alcobas),
        Baños: parseInt(basicInfo.Baños),
        Garaje: parseInt(basicInfo.Garaje),
        Estrato: parseInt(basicInfo.Estrato),
        Piso: parseInt(basicInfo.Piso),
        Area_Privada: parseFloat(basicInfo.Area_Privada),
        Area_Construida: parseFloat(basicInfo.Area_Construida),
        Area_Total: parseFloat(basicInfo.Area_Total),
        Video: basicInfo.Video,
        Departamento: location.Departamento,
        Ciudad: location.Ciudad,
        Localidad: location.Localidad,
        Barrio: location.Barrio,
        Direccion: location.Direccion,
        Descripcion: description.description.Descripcion,
        Imagenes: images.join(","),
      };

      const [detailsActivoResult] = await connection.query(
        "INSERT INTO Detalle_Activos SET ?",
        [detailsActivo]
      ); // Insertar Detalle Activo

      // PREPARAR DATOS PARA ANIDAR EL DETALLE DEL ACTIVO CON EL TIPO DE NEGOCIO

      const typeActive = {
        Tipo_De_Negocio_idTipo_De_Negocio: basicInfo.Nombre_Tipo_De_Negocio,
        Detalle_Activos_idDetalle_Activos: detailsActivoResult.insertId,
      };

      const [typeActiveResult] = await connection.query(
        "INSERT INTO Tipo_De_Negocio_Detalle_Activo SET ? ",
        [typeActive]
      ); // UNIR REGISTROS POR ID

      // PREPARAR DATOS PARA ANIDACION DE CARACTERISTICAS INTERNAS Y EXTERNAS

      // Insertar registros de Caracteristicas_Internas_Detalle_Activos
      for (const char of internalChars) {
        const internalCharData = {
          Caracteristicas_Internas_idCaracteristicas_Internas: char.value,
          Detalle_Activos_idDetalle_Activos: detailsActivoResult.insertId,
        };
        await connection.query(
          "INSERT INTO Caracteristicas_Internas_Detalle_Activos SET ?",
          [internalCharData]
        );
      }

      for (const char of externalChars) {
        const externalCharData = {
          Caracteristicas_Externas_idCaracteristicas_Externas: char.value,
          Detalle_Activos_idDetalle_Activos: detailsActivoResult.insertId,
        };
        await connection.query(
          "INSERT INTO Caracteristicas_Externas_Detalle_Activos SET ?",
          [externalCharData]
        );
      }

      await connection.commit();
      res.status(200).json({ message: "Activo creado con éxito" });
    } catch (error) {
      await connection.rollback();
      console.error("Error durante la transacción", error);
      res.status(500).json({ message: "Error al crear activo" });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error al obtener conexión", error);
    res.status(500).json({ message: "Error de conexión a la base de datos" });
  }
};

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
    return res.status(400).json({ message: "error al crear registro", error });
  }
};
