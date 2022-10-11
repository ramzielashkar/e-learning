import axios from 'axios';
import { baseUrl } from './baseUrl';
export const getAssignments = async (token, coursename) => {
    const res = await axios.get(`${baseUrl}/getAssignments/${coursename}`,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }