import axios from 'axios';
import { baseUrl } from './baseUrl';
export const login = async (data) => {
    const res = await axios.post(`${baseUrl}/login`, data,{
        headers: {
          "Content-type": "application/json",
        },
      });
      return res;
 }