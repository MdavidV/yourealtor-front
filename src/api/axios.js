import axios from "axios";

const instance = axios.create({
    baseURL: 'https://yourealtor-api.onrender.com/api',
    withCredentials: true
})

export default instance;