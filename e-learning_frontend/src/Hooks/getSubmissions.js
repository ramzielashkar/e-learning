import axios from 'axios';
import { baseUrl } from './baseUrl';
export const getSubmissions = async (token) => {
    const res = await axios.get(`${baseUrl}/getAllSubmissions`,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }