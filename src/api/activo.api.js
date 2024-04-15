import axios from "axios";

export const getActivosRequest = async ()=>{
    return await axios.get('http://localhost:4000/activos');
}

export const getActivosByAdminRequest = async () => {
    return await axios.get('http://localhost:4000/get-activo-admin');
}

export const getActivoByIdRequest = async (idActivo) =>{
    return await axios.get(`http://localhost:4000/activo-byId/${idActivo}`);
}



export const getActivoRequest = async(id)=>{
    return await axios.get(`http://localhost:4000/activos/${id}`);
}

export const deleteExternalCharsRequest = async (charName) => {
    return await axios.delete('http://localhost:4000/delete-external-char', {data: {charName}});
}

export const getTableRequest = async () => {
    return await axios.get(`http://localhost:4000/get-tables` );
}

export const deleteFieldRequest = async (tableName, idField) => {
    return await axios.delete(`http://localhost:4000/delete-field/${tableName}/${idField}`);
}

export const createFieldRequest = async (tableName, data) => {
    return await axios.post('http://localhost:4000/create-field', {data: {tableName, data}} );
}

export const createPropertyRequest = async (data) => {
    return await axios.post('http://localhost:4000/create-property', data);
}

export const updatePropertyRequest = async (data, id) => {
    return await axios.patch(`http://localhost:4000/update-activo/${id}`, data);
}