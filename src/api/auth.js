import axios from "./axios";

export const registerRequest = (user) => axios.post('/signup', user);
export const loginRequest = (user) => axios.post('/login ', user);

export const verifyTokenRequest = () => axios.get('/verify');

 export const confirmRequest = (token) => axios.get(`/confirm/${token}`);

