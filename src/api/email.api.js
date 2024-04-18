import axios from 'axios';


export const sendMailRequest = async (formData) => {
    return await axios.post('https://yourealtor.onrender.com/send-email', formData);
}