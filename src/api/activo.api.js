import axios from "axios";

export const getActivosRequest = async ()=>{
    return await axios.get('http://localhost:4000/activos');
}