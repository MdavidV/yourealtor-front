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


export const getInternalCharsRequest = async () => {
    return await axios.get('http://localhost:4000/internal-chars');
}


export const createInternalCharsRequest = async (newCharData) => {
    return await axios.post('http://localhost:4000/new-internal-char', newCharData);
}

export const getExternalCharsRequest = async () => {
    return await axios.get('http://localhost:4000/external-chars');
}


export const createExternalCharsRequest = async (newCharData) => {
    return await axios.post('http://localhost:4000/new-external-char', newCharData);
}

export const deleteInternalCharsRequest = async (charName) => {
    return await axios.delete('http://localhost:4000/delete-internal-char', {data: {charName}});
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