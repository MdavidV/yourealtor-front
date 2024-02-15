import mongoose from 'mongoose';
import { MONGO_URI, DB_NAME } from './config.js';

export const connectToDatabase = async () => {
    try{
        await mongoose.connect(MONGO_URI, {
            dbName: DB_NAME
        })

        console.log('Conexion a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar con la base de datos: ', error);
        throw error;
    }
}