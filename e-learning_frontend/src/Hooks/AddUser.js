import axios from 'axios';
import { baseUrl } from './baseUrl';
export const addUser = async (data, token) => {
    const res = await axios.post(`${baseUrl}/addUser`, data,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }