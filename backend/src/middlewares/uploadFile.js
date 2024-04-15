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
  if (!req.files || (!req.files.imgs && !req.files.docs)) {
    console.log("No hay archivos para subir.");
    return next();
  }

  const basicInfoObj = JSON.parse(req.body.basicInfo);
  const matriculaInmobiliaria = basicInfoObj.Matricula_Inmobiliaria;

  if (!matriculaInmobiliaria) {
    return res.status(400).send("La matrícula inmobiliaria es requerida.");
  };

  let filesToUpload = [];
  let imageUrls = [];
  let documentUrls = [];

  if (req.files?.imgs && req.files.imgs) {
    filesToUpload = filesToUpload.concat(req.files.imgs.map(file => ({ file, subdir: "images" })));
  }
  if (req.files && req.files.docs) {
    // Asegurándose de que siempre se trate con un array
    const docsArray = Array.isArray(req.files.docs) ? req.files.docs : [req.files.docs];
    filesToUpload = filesToUpload.concat(docsArray.map(file => ({ file, subdir: "documents" })));
  }

  const uploadPromises = filesToUpload.map(({ file, subdir }) =>
    uploadPropertyFile(file, matriculaInmobiliaria, subdir)
  );

  try {
    const urls = await Promise.all(uploadPromises);
    urls.forEach((url, index) => {
      if (filesToUpload[index].subdir === "images") {
        imageUrls.push(url);
      } else if (filesToUpload[index].subdir === "documents") {
        documentUrls.push(url);
      }
    });

    req.body.urls = {
      imgs: imageUrls,
      docs: documentUrls
    }; // Estructura los URLs en dos categorías distintas

    next();
  } catch (error) {
    console.error("Error al subir archivos a S3:", error);
    res.status(500).send("Error al subir archivos");
  }
};
