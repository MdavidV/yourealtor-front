import mongoose from 'mongoose';

export const connectToDatabase = async () => {
    try{
        await mongoose.connect("mongodb+srv://dbTech:Ozzy63%2423@yourealtor-try.h5ah1xy.mongodb.net/?retryWrites=true&w=majority", {
            dbName: 'Users'
        })

        console.log('Conexion a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar con la base de datos: ', error);
        throw error;
    }
}