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