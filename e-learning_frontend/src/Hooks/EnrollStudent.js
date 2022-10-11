import axios from 'axios';
import { baseUrl } from './baseUrl';
export const enrollStudent = async (data, token) => {
    const res = await axios.post(`${baseUrl}/enrollStudent`, data,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }