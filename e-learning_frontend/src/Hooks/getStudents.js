import axios from 'axios';
import { baseUrl } from './baseUrl';
export const getStudents = async (token) => {
    const res = await axios.get(`${baseUrl}/getStudent`,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }