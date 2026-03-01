import axios from 'axios';

export const api  = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        apiKey: process.env.API_KEY,
        Authorization: process.env.JWT_KEY
    }
})