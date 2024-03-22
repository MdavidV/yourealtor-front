import { AWS_REGION, AWS_S3_BUCKET } from "../config.js";
import { uploadFile } from "../libs/s3Lib.js";

export const uploadFileToS3 = async (req, res, next) => {
  try {
    const file = req.files['image'];
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
