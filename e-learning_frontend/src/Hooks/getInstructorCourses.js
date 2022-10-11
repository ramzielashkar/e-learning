import axios from 'axios';
import { baseUrl } from './baseUrl';
export const getCourses = async (token) => {
    const res = await axios.get(`${baseUrl}/getInstructorCourses`,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }