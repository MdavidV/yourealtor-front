import {
  AWS_REGION,
  AWS_ACCES_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_S3_BUCKET,
} from "../config.js";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";

const client = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCES_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

export const uploadFile = async (file) => {
  const contentType = determineContentType(file.name);

  const stream = fs.createReadStream(`./${file.tempFilePath}`);
  const fileName = `uploads/-${file.name}`;
  const uploadParams = {
    Bucket: AWS_S3_BUCKET,
    Key: fileName,
    Body: stream,
    ACL: "public-read",
    ContentType: contentType,
  };
  const command = new PutObjectCommand(uploadParams);

  await client.send(command);

  const fileUrl = `https://${AWS_S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com/${fileName}`;
  return fileUrl;
};

function determineContentType(fileName) {
  const extension = path.extname(fileName).toLowerCase();
  switch (extension) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".gif":
      return "image/gif";
    // Añade más casos según sea necesario
    default:
      return "application/octet-stream"; // Tipo genérico para datos binarios; ajusta según sea necesario
  }
}

export const deleteFile = async (fileName) => {
  const s3 = new AWS.S3();
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName, // Asegúrate de que este sea el camino correcto al archivo
  };

  try {
    await s3.deleteObject(params).promise();
    console.log("Imagen eliminada con éxito de S3:", fileName);
  } catch (error) {
    console.error("Error al eliminar la imagen de S3:", error);
    throw error; // Lanza el error para manejarlo en el caller de esta función
  }
};
