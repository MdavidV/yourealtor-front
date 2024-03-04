import axios from 'axios';


export const sendMailRequest = async (formData) => {
    return await axios.post('http://localhost:4000/send-email', formData);
}