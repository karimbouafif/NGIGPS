import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { Config } from './index'
const token = AsyncStorage.getItem("token");
const api = axios.create({
    baseURL: Config.API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AsyncStorage.getItem("token")}`
    },
})

api.interceptors.request.use(config => {
    // perform a task before the request is sent
    console.log('Request was sent');
    return config;
}, error => {
    // handle the error
    return Promise.reject(error);
});
export default api ;
