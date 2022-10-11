import axios from 'axios';
import { baseUrl } from './baseUrl';
export const getInstructors = async (token) => {
    const res = await axios.get(`${baseUrl}/getUsers/instructor`,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }