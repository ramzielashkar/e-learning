import axios from 'axios';
import { baseUrl } from './baseUrl';
export const addAssignment = async (data, token) => {
    const res = await axios.post(`${baseUrl}/addAssignment`, data,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }