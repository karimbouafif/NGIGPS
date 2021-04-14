import axios from 'axios/index';
import { Config } from '../../Config/api';
const token = '..your token..'
const authApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
})

authApiClient.interceptors.request.use(config => {
  // perform a task before the request is sent
  console.log('Request was sent');
  return config;
}, error => {
  // handle the error
  return Promise.reject(error);
});

export function googleOauth(payload){
  return authApiClient.post('/users/mobile/oauth/google', payload);
}

export function googleSignup(payload){
  return authApiClient.post('/users/mobile/signup/google', payload);
}

export function facebookOauth(payload){
  return authApiClient.post('/users/mobile/oauth/facebook', payload)
}

export function getFacebookProfile(accessToken){
  return authApiClient.post('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + accessToken)
}



export function userLogin(payload){
  return authApiClient.post('/users/mobile/signin', payload);
}

export function  AddMission(payload){

  return authApiClient.post('/missions/add', payload);
}


