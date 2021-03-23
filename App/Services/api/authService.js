import axios from 'axios/index';
import { Config } from '../../Config/api';
import AsyncStorage from '@react-native-community/async-storage';


const authApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})





export function userLogin(payload){
  return authApiClient.post('/users/login', payload);
}


