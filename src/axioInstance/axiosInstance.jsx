import axios from 'axios';

// Axios instance with default configurations
const axiosInstance = axios.create({
    baseURL: 'https://universal-blogs-server.vercel.app', // Adjust to your backend URL
    withCredentials: true, // Allows cookies to be sent
});

export default axiosInstance;