import axios from 'axios';
import { baseUrl } from './baseUrl';
export const addAnnouncement = async (data, token) => {
    const res = await axios.post(`${baseUrl}/addAnouncement`, data,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }