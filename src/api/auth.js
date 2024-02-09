import axios from "./axios";

export const registerRequest = (user) => axios.post('/signup', user);
export const loginRequest = (user) => axios.post('/login ', user);

export const logoutRequest = () => axios.post('/logout')

export const verifyTokenRequest = (token) => axios.get('/verify', { headers: { Authorization: `Bearer ${token}` } });


export const confirmRequest = (token) => axios.get(`/confirm/${token}`);

export const profileRequest = () => axios.get('/profile');