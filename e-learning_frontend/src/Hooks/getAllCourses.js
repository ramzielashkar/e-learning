import axios from 'axios';
import { baseUrl } from './baseUrl';
export const getAllCourses = async (token, assigned='') => {
    const res = await axios.get(`${baseUrl}/getCourses/${assigned}`,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }