import axios from "axios";

export const getActivosRequest = async ()=>{
    return await axios.get('https://yourealtor.onrender.com/activos');
}

export const getActivosByAdminRequest = async () => {
    return await axios.get('https://yourealtor.onrender.com/get-activo-admin');
}

export const getActivoByIdRequest = async (idActivo) =>{
    return await axios.get(`https://yourealtor.onrender.com/activo-byId/${idActivo}`);
}

export const createClientRequest = async (data) => {
    return await axios.post('https://yourealtor.onrender.com/create-client', data);
}



export const getActivoRequest = async(id)=>{
    return await axios.get(`https://yourealtor.onrender.com/activos/${id}`);
}

export const deleteExternalCharsRequest = async (charName) => {
    return await axios.delete('https://yourealtor.onrender.com/delete-external-char', {data: {charName}});
}

export const getTableRequest = async () => {
    return await axios.get(`https://yourealtor.onrender.com/get-tables` );
}

export const deleteFieldRequest = async (tableName, idField) => {
    return await axios.delete(`https://yourealtor.onrender.com/delete-field/${tableName}/${idField}`);
}

export const createFieldRequest = async (tableName, data) => {
    return await axios.post('https://yourealtor.onrender.com/create-field', {data: {tableName, data}} );
}

export const createPropertyRequest = async (data) => {
    return await axios.post('https://yourealtor.onrender.com/create-property', data);
}

export const updatePropertyRequest = async (data, id) => {
    return await axios.patch(`https://yourealtor.onrender.com/update-activo/${id}`, data);
}