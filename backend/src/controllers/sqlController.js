import { pool } from "../databaseSql.js";
import { formatActivoData } from "../libs/formatedActivo.js";

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
  const idDetalleActivos = parseInt(req.params.id, 10);
  try {
    const [result] = await pool.query(
      `
      SELECT 
    DA.idDetalle_Activos,
    DA.Activo_idActivo,
    DA.Tipo_Activo_idTipo_Activo,
    DA.Titulo_Del_Inmueble,
    DA.Matricula_Inmobiliaria,
    DA.Precio_Venta,
    DA.Precio_Alquiler,
    DA.Valor_Administracion,
    DA.Estado_Propiedad,
    DA.Año_Construccion,
    DA.Alcobas,
    DA.Baños,
    DA.Garaje,
    DA.Estrato,
    DA.Piso,
    DA.Area_Privada,
    DA.Area_Construida,
    DA.Area_Total,
    DA.Video,
    DA.Departamento,
    DA.Ciudad,
    DA.Localidad,
    DA.Barrio,
    DA.Direccion,
    DA.Descripcion,
    DA.Imagenes,
    GROUP_CONCAT(DISTINCT CE.Nombre_Caracteristica SEPARATOR ', ') AS Caracteristicas_Externas,
    GROUP_CONCAT(DISTINCT CI.Nombre_Caracteristica SEPARATOR ', ') AS Caracteristicas_Internas,
    TN.Nombre_Tipo_De_Negocio,
    T.Nombre_Tipo_Activo,
    GROUP_CONCAT(DISTINCT Doc.enlace_s3 SEPARATOR ', ') AS Documentos
FROM 
    Detalle_Activos DA
JOIN 
    Caracteristicas_Externas_Detalle_Activos CEDA ON DA.idDetalle_Activos = CEDA.Detalle_Activos_idDetalle_Activos
JOIN 
    Caracteristicas_Externas CE ON CEDA.Caracteristicas_Externas_idCaracteristicas_Externas = CE.idCaracteristicas_Externas
JOIN 
    Caracteristicas_Internas_Detalle_Activos CIDA ON DA.idDetalle_Activos = CIDA.Detalle_Activos_idDetalle_Activos
JOIN 
    Caracteristicas_Internas CI ON CIDA.Caracteristicas_Internas_idCaracteristicas_Internas = CI.idCaracteristicas_Internas
JOIN 
    Tipo_De_Negocio_Detalle_Activo TNDA ON DA.idDetalle_Activos = TNDA.Detalle_Activos_idDetalle_Activos
JOIN 
    Tipo_De_Negocio TN ON TNDA.Tipo_De_Negocio_idTipo_De_Negocio = TN.idTipo_De_Negocio
JOIN 
    Tipo_Activo T ON DA.Tipo_Activo_idTipo_Activo = T.idTipo_Activo
LEFT JOIN 
    Documentos_Activos Doc ON DA.Activo_idActivo = Doc.id_activo
WHERE 
    DA.Activo_idActivo = ?
GROUP BY 
    DA.idDetalle_Activos;


        `,
      [idDetalleActivos]
    );
    if (result.length === 0) {
      return res.status(404).json({
        message: "Activo no encontrado",
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getActivoByAdmin = async (req, res) => {
  const getTableResult = await pool.query(`
  SELECT 
  A.idActivo,
  A.Encargado_Del_Activo,
  A.Estado_Activo,
  T.Nombre_Tipo_Activo,
  DA.Titulo_Del_Inmueble,
  DA.Matricula_Inmobiliaria,
  DA.Departamento,
  DA.Ciudad,
  TN.Nombre_Tipo_De_Negocio,
  DA.Precio_Venta,
  DA.Precio_Alquiler,
  DA.Estado_Propiedad,
  DA.Alcobas,
  DA.Baños,
  DA.Area_Total,
  DA.Imagenes
FROM 
  Activo A
JOIN 
  Detalle_Activos DA ON A.idActivo = DA.Activo_idActivo
JOIN 
  Tipo_Activo T ON DA.Tipo_Activo_idTipo_Activo = T.idTipo_Activo
JOIN 
  Tipo_De_Negocio_Detalle_Activo TNDA ON DA.idDetalle_Activos = TNDA.Detalle_Activos_idDetalle_Activos
JOIN 
  Tipo_De_Negocio TN ON TNDA.Tipo_De_Negocio_idTipo_De_Negocio = TN.idTipo_De_Negocio;

  `);

  if (getTableResult) {
    res.status(200).json(getTableResult.shift());
  }
};

export const getActivoById = async (req, res) => {
  try {
    const { idActivo } = req.params;
    const query = `SELECT 
    A.*, 
    P.*, 
    DA.*,
    GROUP_CONCAT(DISTINCT CI.Nombre_Caracteristica SEPARATOR ', ') AS internalChars,
    GROUP_CONCAT(DISTINCT CE.Nombre_Caracteristica SEPARATOR ', ') AS externalChars,
    T.Nombre_Tipo_Activo,
    TN.Nombre_Tipo_De_Negocio
  FROM 
    Activo A
  JOIN 
    Propietarios P ON A.Propietarios_idPropietarios = P.idPropietarios
  JOIN 
    Detalle_Activos DA ON A.idActivo = DA.Activo_idActivo
  LEFT JOIN 
    Caracteristicas_Internas_Detalle_Activos CID ON DA.idDetalle_Activos = CID.Detalle_Activos_idDetalle_Activos
  LEFT JOIN 
    Caracteristicas_Internas CI ON CID.Caracteristicas_Internas_idCaracteristicas_Internas = CI.idCaracteristicas_Internas
  LEFT JOIN 
    Caracteristicas_Externas_Detalle_Activos CED ON DA.idDetalle_Activos = CED.Detalle_Activos_idDetalle_Activos
  LEFT JOIN 
    Caracteristicas_Externas CE ON CED.Caracteristicas_Externas_idCaracteristicas_Externas = CE.idCaracteristicas_Externas
  JOIN 
    Tipo_Activo T ON DA.Tipo_Activo_idTipo_Activo = T.idTipo_Activo
  JOIN 
    Tipo_De_Negocio_Detalle_Activo TNDA ON DA.idDetalle_Activos = TNDA.Detalle_Activos_idDetalle_Activos
  JOIN 
    Tipo_De_Negocio TN ON TNDA.Tipo_De_Negocio_idTipo_De_Negocio = TN.idTipo_De_Negocio
  WHERE 
    A.idActivo = ?
  GROUP BY
    A.idActivo;`;

    const [results] = await pool.query(query, [idActivo]);

    if (results.length === 0) {
      return res.status(404).send("Activo no encontrado");
    }

    const activo = formatActivoData(results[0]);

    res.json(activo);
  } catch (error) {
    console.error("Error al obtener el activo", error);
    res.status(500).send("Error al obtener el activo");
  }
};

export const updateActivo = async (req, res) => {
  const jsonFields = [
    "ownerInfo",
    "basicInfo",
    "location",
    "internalChars",
    "externalChars",
    "imagesToRemove",
    "documentsToRemove", // Asegúrate de que esto esté incluido en el cuerpo de la solicitud
  ];

  jsonFields.forEach((field) => {
    if (req.body[field]) {
      req.body[field] = JSON.parse(req.body[field]);
    }
  });

  const {
    basicInfo,
    description,
    location,
    ownerInfo,
    internalChars,
    externalChars,
  } = req.body;
  const { id } = req.params;

  console.log(basicInfo);
  const activoId = id; // Asegúrate de que estos datos se extraen correctamente

  // Continuar solo si activoId y basicInfo están definidos
  if (!activoId || !basicInfo) {
    return res
      .status(400)
      .json({ message: "Información de actualización faltante." });
  }

  try {
    const connection = await pool.getConnection();

    try {
      // Iniciar transacción
      await connection.beginTransaction();

      // Actualizar tabla Activo
      const [activoUpdateResult] = await connection.query(
        `UPDATE Activo 
         SET Usuario_Actualizacion = ?, 
             Fecha_Actualizacion = ?, 
             Encargado_Del_Activo = ?, 
             Estado_Activo = ? 
         WHERE idActivo = ?`,
        [
          "usuario_actual", // Reemplazar con el usuario actual obtenido del contexto de la sesión
          new Date(),
          basicInfo.Encargado_Del_Activo,
          basicInfo.Estado_Activo,
          activoId,
        ]
      );

      // Verificar si la actualización tuvo efecto
      if (activoUpdateResult.affectedRows === 0) {
        throw new Error("No se encontró el activo para actualizar.");
      }

      const [ownerIdResult] = await connection.query(
        `SELECT Propietarios_idPropietarios FROM Activo WHERE idActivo = ?`,
        [activoId]
      );

      const propietarioId = ownerIdResult[0].Propietarios_idPropietarios;

      if (!propietarioId) {
        throw new Error(
          "No se encontró el id del propietario para el activo especificado."
        );
      }

      // Continuar con la actualización del propietario

      // Asumiendo que ownerInfo contiene { Nombre_Propietario, Apellido_Propietario, etc. }
      const [ownerUpdateResult] = await connection.query(
        `UPDATE Propietarios 
         SET Nombre_Propietario = ?, 
             Apellido_Propietario = ?, 
             Cedula_Propietario = ?, 
             Email_Propietario = ?, 
             Telefono_Propietario = ? 
         WHERE idPropietarios = ?`,
        [
          ownerInfo.Nombre_Propietario,
          ownerInfo.Apellido_Propietario,
          ownerInfo.Cedula_Propietario,
          ownerInfo.Email_Propietario,
          ownerInfo.Telefono_Propietario,
          propietarioId,
        ]
      );

      // Verificar si la actualización del propietario tuvo efecto
      if (ownerUpdateResult.affectedRows === 0) {
        throw new Error("No se encontró el propietario para actualizar.");
      }

      // Actualizar la tabla Detalle_Activos
      const [detailUpdateResult] = await connection.query(
        `UPDATE Detalle_Activos 
   SET Tipo_Activo_idTipo_activo = ?,
   Titulo_Del_Inmueble = ?, 
   Matricula_Inmobiliaria = ?,
       Precio_Venta = ?, 
       Precio_Alquiler = ?, 
       Valor_Administracion = ?, 
       Estado_Propiedad = ?, 
       Año_Construccion = ?, 
       Alcobas = ?,
       Baños = ?,
       Garaje = ?,
       Estrato = ?,
       Piso = ? ,
       Area_Privada = ?,
       Area_Construida = ?,
       Area_Total = ?,
       Video = ?,
       Descripcion = ?, 
       Departamento = ?, 
       Ciudad = ?, 
       Localidad = ?, 
       Barrio = ?, 
       Direccion = ?,
       Descripcion = ?,
       Periodizidad = ?
   WHERE Activo_idActivo = ?`,
        [
          parseInt(basicInfo.Nombre_Tipo_Activo),
          basicInfo.Titulo_Del_Inmueble,
          basicInfo.Matricula_Inmobiliaria,
          basicInfo.Precio_Venta,
          basicInfo.Precio_Alquiler,
          basicInfo.Valor_Administracion,
          basicInfo.Estado_Propiedad,
          basicInfo.Año_Construccion,
          parseInt(basicInfo.Alcobas),
          parseInt(basicInfo.Baños),
          basicInfo.Garaje,
          parseInt(basicInfo.Estrato),
          basicInfo.Piso,
          parseFloat(basicInfo.Area_Privada),
          parseFloat(basicInfo.Area_Construida),
          parseFloat(basicInfo.Area_Total),
          basicInfo.Video,
          basicInfo.description,
          location.Departamento,
          location.Ciudad,
          location.Localidad,
          location.Barrio,
          location.Direccion,
          description,
          basicInfo.Tipo_De_Periodo,
          activoId,
        ]
      );

      // Verificar si la actualización tuvo efecto
      if (detailUpdateResult.affectedRows === 0) {
        throw new Error(
          "No se encontró el detalle del activo para actualizar."
        );
      }

      // Continuar con el Update de los documentos

      if (req.body.documentsToRemove && req.body.documentsToRemove.length > 0) {
        await connection.query(
          "DELETE FROM Documentos_Activos WHERE enlace_s3 = ? AND id_activo = ?",
          [req.body.documentsToRemove, activoId]
        );
      }

      // Inserción de nuevos documentos
      const newDocumentInserts = req.body.urls.docs.map((url) => ({
        id_activo: activoId,
        enlace_s3: url,
        fecha_carga: new Date(),
      }));

      for (const doc of newDocumentInserts) {
        await connection.query("INSERT INTO Documentos_Activos SET ?", [doc]);
      }

      // Verificar si imagesToRemove e images están presentes en el req.body
      const imagesToRemove = Array.isArray(req.body.imagesToRemove)
        ? req.body.imagesToRemove
        : [];
      const images = Array.isArray(req.body.urls.imgs)
        ? req.body.urls.imgs
        : [];

      // Continúa si hay imágenes para eliminar o agregar
      if (imagesToRemove.length > 0 || images.length > 0) {
        // Obtener el campo imagenes actual para comparar con imagesToRemove
        const [currentImagesResult] = await connection.query(
          `SELECT imagenes FROM Detalle_Activos WHERE Activo_idActivo = ?`,
          [activoId]
        );

        // Se supone que las imágenes actuales están almacenadas como una cadena separada por comas
        let currentImages = currentImagesResult[0].imagenes
          ? currentImagesResult[0].imagenes.split(",")
          : [];
        let updatedImages = currentImages;

        // Eliminar imágenes si es necesario
        updatedImages = currentImages.filter(
          (img) => !imagesToRemove.includes(img)
        );

        // Agregar nuevas imágenes si es necesario
        updatedImages = [...new Set([...updatedImages, ...images])]; // Utiliza un Set para eliminar duplicados

        // Actualizar el campo imagenes en la base de datos si hay cambios
        if (currentImages.join(",") !== updatedImages.join(",")) {
          await connection.query(
            `UPDATE Detalle_Activos 
       SET imagenes = ? 
       WHERE Activo_idActivo = ?`,
            [updatedImages.join(","), activoId]
          );
        }
      }
      let [detailActivoId] = await connection.query(
        "SELECT idDetalle_Activos FROM Detalle_Activos WHERE Activo_idActivo = ?",
        [id]
      );

      detailActivoId = detailActivoId[0].idDetalle_Activos;

      try {
        // Eliminar todas las características internas existentes para este detalle activo
        await connection.query(
          `DELETE FROM Caracteristicas_Internas_Detalle_Activos 
           WHERE Detalle_Activos_idDetalle_Activos = ?`,
          [detailActivoId]
        );

        // Inserta las nuevas características internas
        for (const char of internalChars) {
          // Asumiendo que char.Nombre_Caracteristica contiene el nombre de la característica
          const nombreCaracteristica = char.label ? char.label : char;

          // Primero, buscar el ID de la característica interna por su nombre
          const [caracteristica] = await connection.query(
            "SELECT idCaracteristicas_Internas FROM Caracteristicas_Internas WHERE Nombre_Caracteristica = ?",
            [nombreCaracteristica]
          );

          // Si la característica existe, proceder con la inserción o actualización
          if (caracteristica.length > 0) {
            const caracteristicaId =
              caracteristica[0].idCaracteristicas_Internas;
            const internalCharData = {
              Caracteristicas_Internas_idCaracteristicas_Internas:
                caracteristicaId,
              Detalle_Activos_idDetalle_Activos: detailActivoId,
            };

            await connection.query(
              "INSERT INTO Caracteristicas_Internas_Detalle_Activos SET ?",
              [internalCharData]
            );
          } else {
            // Manejar el caso en que no se encuentre la característica por su nombre
            console.log(
              `No se encontró la característica con nombre: ${nombreCaracteristica}`
            );
          }
        }
      } catch (error) {
        // Si ocurre algún error durante la inserción, hacer rollback
        await connection.rollback();
        throw error; // Relanzar el error para que se pueda manejar más adelante
      }

      try {
        // Eliminar todas las características internas existentes para este detalle activo
        await connection.query(
          `DELETE FROM Caracteristicas_Externas_Detalle_Activos 
           WHERE Detalle_Activos_idDetalle_Activos = ?`,
          [detailActivoId]
        );

        // Inserta las nuevas características internas
        for (const char of externalChars) {
          // Asumiendo que char.Nombre_Caracteristica contiene el nombre de la característica
          const nombreCaracteristica = char.label ? char.label : char;

          // Primero, buscar el ID de la característica interna por su nombre
          const [caracteristica] = await connection.query(
            "SELECT idCaracteristicas_Externas FROM Caracteristicas_Externas WHERE Nombre_Caracteristica = ?",
            [nombreCaracteristica]
          );

          // Si la característica existe, proceder con la inserción o actualización
          if (caracteristica.length > 0) {
            const caracteristicaId =
              caracteristica[0].idCaracteristicas_Externas;
            const externalCharData = {
              Caracteristicas_Externas_idCaracteristicas_Externas:
                caracteristicaId,
              Detalle_Activos_idDetalle_Activos: detailActivoId,
            };

            await connection.query(
              "INSERT INTO Caracteristicas_Externas_Detalle_Activos SET ?",
              [externalCharData]
            );
          } else {
            // Manejar el caso en que no se encuentre la característica por su nombre
            console.log(
              `No se encontró la característica con nombre: ${nombreCaracteristica}`
            );
          }
        }
      } catch (error) {
        // Si ocurre algún error durante la inserción, hacer rollback
        await connection.rollback();
        throw error; // Relanzar el error para que se pueda manejar más adelante
      }

      // Si todas las actualizaciones fueron exitosas
      await connection.commit();
      res.status(200).json({ message: "Activo actualizado con éxito" });
    } catch (error) {
      // Si hay un error, deshacer cambios
      await connection.rollback();
      console.error("Error durante la transacción", error);
      res.status(500).json({ message: "Error al actualizar el activo" });
    } finally {
      // Liberar conexión
      connection.release();
    }
  } catch (error) {
    // Error al obtener la conexión
    console.error("Error al obtener conexión", error);
    res.status(500).json({ message: "Error de conexión a la base de datos" });
  }
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
    "location",
    "internalChars",
    "externalChars",
    "urls",
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
        urls,
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
        Descripcion: description,
        Imagenes: urls.imgs.join(","),
        Periodizidad: basicInfo.Tipo_De_Periodo,
      };

      const [detailsActivoResult] = await connection.query(
        "INSERT INTO Detalle_Activos SET ?",
        [detailsActivo]
      ); // Insertar Detalle Activo

      // SUBIR DOCUMENTOS

      if (urls.docs && urls.docs.length > 0) {
        const documentInserts = urls.docs.map((docUrl) => ({
          id_activo: activoResult.insertId, // ID del activo recién creado
          enlace_s3: docUrl, // URL del documento subido
          fecha_carga: new Date(), // Fecha de subida del documento
        }));

        for (let doc of documentInserts) {
          await connection.query("INSERT INTO Documentos_Activo SET ?", [doc]);
        }
      }

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
        if (char.value && char.value !== "") {
          const internalCharData = {
            Caracteristicas_Internas_idCaracteristicas_Internas: char.value,
            Detalle_Activos_idDetalle_Activos: detailsActivoResult.insertId,
          };
          await connection.query(
            "INSERT INTO Caracteristicas_Internas_Detalle_Activos SET ?",
            [internalCharData]
          );
        }
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

export const deleteField = async (req, res) => {
  const { tableName, idField } = req.params;
  const connection = await pool.getConnection();
  try {
    // Inicia una transacción para manejar las operaciones relacionales
    await connection.beginTransaction();

    // Si la tabla es de características internas o externas, elimina primero las asociaciones
    if (
      tableName === "Caracteristicas_Internas" ||
      tableName === "Caracteristicas_Externas"
    ) {
      // Determina el nombre de la tabla de asociación correspondiente
      const associationTable = `${tableName}_Detalle_Activos`;
      // Elimina las asociaciones con la característica
      await connection.query(
        `DELETE FROM ${associationTable} WHERE ${tableName}_id${tableName} = ?`,
        [idField]
      );
    }

    // Luego elimina la característica misma
    const deleteFieldResult = await connection.query(
      `DELETE FROM ${tableName} WHERE id${tableName} = ?`,
      [idField]
    );

    // Si todo salió bien, haz commit a la transacción
    await connection.commit();

    res.status(200).json(deleteFieldResult);
  } catch (error) {
    // En caso de error, haz rollback a la transacción
    if (connection) await connection.rollback();
    console.error("Error al borrar el campo: ", error);
    res.status(400).json({ message: "Error al borrar el campo" });
  } finally {
    // Asegúrate de liberar la conexión
    if (connection) await connection.release();
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

  if (!tableConfigs[tableName]) {
    return res.status(404).json({ message: "Tabla no encontrada" });
  }

  const config = tableConfigs[tableName];

  try {
    console.log(data);
    const createRecord = await pool.query(
      `INSERT INTO ${tableName} (${config.fieldName}) VALUES ("${data}")`
    );

    if (createRecord)
      return res.status(200).json({ message: "Campo creado con exito" });
  } catch (error) {
    return res.status(400).json({ message: "error al crear registro", error });
  }
};

// LLAMADO A CADA UNA DE LAS TABLAS PARA TRAER SUS VALORES EN UNA UNICA CALL A LA API

const getCities = async (req, res) => {
  try {
    const getTableResult = await pool.query("SELECT * FROM Ciudades ");
    return getTableResult[0];
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPropertyTypes = async (req, res) => {
  try {
    const getTableResult = await pool.query("SELECT * FROM Tipo_Activo ");
    return getTableResult[0];
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const getPeriodicity = async (req, res) => {
  try {
    const getTableResult = await pool.query("SELECT * FROM Periodizidad");
    return getTableResult[0];
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const getOwners = async (req, res) => {
  try {
    const getTableResult = await pool.query(`
    SELECT 
    p.*,  -- Selecciona todas las columnas de Propietarios
    a.idActivo, 
    a.Encargado_Del_Activo,  
    a.Estado_Activo,         
    da.Titulo_Del_Inmueble,  
    da.Matricula_Inmobiliaria,  
    ta.Nombre_Tipo_Activo    
  FROM Propietarios p
  LEFT JOIN Activo a ON p.idPropietarios = a.Propietarios_idPropietarios
  LEFT JOIN Detalle_Activos da ON a.idActivo = da.Activo_idActivo
  LEFT JOIN Tipo_Activo ta ON da.Tipo_Activo_idTipo_Activo = ta.idTipo_Activo;
    `);
    return getTableResult[0];
  } catch (error) {
    console.error("Error al obtener los propietarios y activos", error);
    res.status(500).json({ message: "Error al obtener los datos" });
  }
};

const getInt = async (req, res) => {
  try {
    const getTableResult = await pool.query(
      "SELECT * FROM  Caracteristicas_Internas "
    );
    return getTableResult[0];
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const getExt = async (req, res) => {
  try {
    const getTableResult = await pool.query(
      "SELECT * FROM Caracteristicas_Externas "
    );
    return getTableResult[0];
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const getBusinessType = async (req, res) => {
  try {
    const getTableResult = await pool.query("SELECT * FROM Tipo_De_Negocio ");
    return getTableResult[0];
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getClients = async (req, res) => {
  try {
    const getTableResult = await pool.query("SELECT * FROM Clientes");
    return getTableResult[0];
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const loadData = async (req, res) => {
  try {
    const cities = await getCities();
    const propertyTypes = await getPropertyTypes();
    const periodicity = await getPeriodicity();
    const owners = await getOwners();
    const int = await getInt();
    const ext = await getExt();
    const businessType = await getBusinessType();
    const clients = await getClients();

    res.json({
      cities,
      propertyTypes,
      periodicity,
      owners,
      int,
      ext,
      businessType,
      clients,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
