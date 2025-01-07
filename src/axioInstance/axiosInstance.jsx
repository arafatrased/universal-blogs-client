import axios from 'axios';

// Axios instance with default configurations
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Adjust to your backend URL
    withCredentials: true, // Allows cookies to be sent
});

export default axiosInstance;