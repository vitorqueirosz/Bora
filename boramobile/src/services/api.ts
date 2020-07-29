import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


const api  = axios.create({
    baseURL: 'http://10.0.2.2:3333'
});

api.interceptors.request.use( async (config: AxiosRequestConfig) => {

    try {
        const token = await AsyncStorage.getItem('@Bora:token');
        const user = await AsyncStorage.getItem('@Bora:user');

        if (token && user) {
            config.headers.Authorization = `Bearer ${token}`
        };

    } catch (err) {
        console.log(err)
    }

    return config;

});


export default api;