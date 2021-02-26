import axios from 'axios/index';
import { apiutlProd,apiurlDev } from '../../Config/api';

const authApiClient = axios.create({
  baseURL: apiutlProd.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})





export function userLogin(payload){
  return authApiClient.post('/user/mobile/signin', payload);
}


