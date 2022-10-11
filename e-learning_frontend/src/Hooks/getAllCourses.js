import axios from 'axios';
export const getAllCourses = async (token, assigned='') => {
    const res = await axios.get(`http://127.0.0.1:8000/api/v0.1/getCourses/${assigned}`,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }