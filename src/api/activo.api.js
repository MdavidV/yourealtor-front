import axios from "axios";

export const getActivosRequest = async ()=>{
    return await axios.get('http://localhost:4000/activos');
}

export const getCitiesRequest = async ()=>{
    return await axios.get('http://localhost:4000/cities');
}

export const getActivoRequest = async(id)=>{
    return await axios.get(`http://localhost:4000/activos/${id}`);
}

export const deleteExternalCharsRequest = async (charName) => {
    return await axios.delete('http://localhost:4000/delete-external-char', {data: {charName}});
}

export const getTableRequest = async (tableName) => {
    return await axios.get(`http://localhost:4000/get-table?tableName=${tableName}` );
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