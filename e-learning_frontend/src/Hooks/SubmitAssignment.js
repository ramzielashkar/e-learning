import axios from 'axios';
import { baseUrl } from './baseUrl';
export const submitAssignment = async (data, token) => {
    const res = await axios.post(`${baseUrl}/submitAssignment`, data,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }