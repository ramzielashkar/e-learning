import axios from 'axios';
import { baseUrl } from './baseUrl';
export const getAllStudents = async (token) => {
    const res = await axios.get(`${baseUrl}/getUsers/student`,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }