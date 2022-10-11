import axios from 'axios';
import { baseUrl } from './baseUrl';
export const getAnnounecements = async (token) => {
    const res = await axios.get(`${baseUrl}/getAnouncements`,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }