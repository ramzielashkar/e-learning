import axios from 'axios';
import { baseUrl } from './baseUrl';
export const getAssignments = async (token) => {
    const res = await axios.get(`${baseUrl}/getAssignments`,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }