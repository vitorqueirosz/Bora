import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
    try {
        const token = localStorage.getItem('@Bora:token');
        const user = localStorage.getItem('@Bora:user');


    if (token && user) {
        config.headers.Authorization  = `Bearer ${token}`;
    };

        return config;

    } catch (err) {
        console.log(err)
    }

    return config;

});

export default api;
