import axios from 'axios';
import { baseUrl } from './baseUrl';
export const assignCourse = async (data, token) => {
    const res = await axios.post(`${baseUrl}/assignCourse`, data,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }