import dotenv from 'dotenv';

dotenv.config();

export const TOKEN_SECRET = process.env.TOKEN_SECRET
export const VERIFICATION_TOKEN_SECRET = process.env.VERIFICATION_TOKEN_SECRET
export const PORT = process.env.PORT
export const MONGO_URI= process.env.MONGO_URI
export const DB_NAME = process.env.DB_NAME
export const SQL_HOST = process.env.SQL_HOST
export const SQL_USER = process.env.SQL_USER
export const SQL_PASSWORD = process.env.SQL_PASSWORD
export const SQL_DB = process.env.SQL_DB
export const GMAIL_USER = process.env.GMAIL_USER
export const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD
export const CALENDLY_TOKEN = process.env.CALENDLY_TOKEN
export const AWS_ACCES_KEY_ID = process.env.AWS_ACCESS_KEY_ID
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY
export const AWS_S3_BUCKET = process.env.AWS_S3_BUCKET
export const AWS_REGION = process.env.AWS_REGION
