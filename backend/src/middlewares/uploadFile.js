import { AWS_REGION, AWS_S3_BUCKET } from "../config.js";
import { uploadFile, uploadPropertyFile } from "../libs/s3Lib.js";

export const uploadFileToS3 = async (req, res, next) => {
  try {
    const file = req.files["image"];
    const result = await uploadFile(file);

    // Construye la URL del archivo subido basado en la información del bucket y el archivo
    const fileUrl = `https://${AWS_S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com/uploads/-${file.name}`;

    console.log("Archivo subido con éxito:", fileUrl);

    // Guarda la URL para su uso en el siguiente middleware o controlador
    req.fileUrl = fileUrl;

    next();
  } catch (error) {
    console.error("Error al subir el archivo a S3:", error);
    res.status(500).send("Error al subir el archivo");
  }
};

export const uploadPropertyFileToS3 = async (req, res, next) => {
  if (!req.files) {
    console.log("No hay Imgs");
    return next();
  }

  console.log(req.files);

  const basicInfoObj = JSON.parse(req.body.basicInfo);

  const matriculaInmobiliaria = basicInfoObj.Matricula_Inmobiliaria;

  if (!matriculaInmobiliaria) {
    return res.status(400).send("La matrícula inmobiliaria es requerida.");
  };

  const files = Object.values(req.files);

  const uploadPromises = files.map(file => {
    return uploadPropertyFile(file, matriculaInmobiliaria);
  });

  try {
    const urls = await Promise.all(uploadPromises);
    req.body.images = urls;
    next();
  } catch (error) {
    console.error("Error al subir archivos a S3:", error);
    res.status(500).send("Error al subir archivos");
  }
};
