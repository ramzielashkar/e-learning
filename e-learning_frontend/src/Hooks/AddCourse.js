import axios from 'axios';
import { baseUrl } from './baseUrl';
export const addCourse = async (data, token) => {
    const res = await axios.post(`${baseUrl}/addCourse`, data,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }