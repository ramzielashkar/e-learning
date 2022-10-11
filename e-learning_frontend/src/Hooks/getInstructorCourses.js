import axios from 'axios';
export const getCourses = async (token) => {
    const res = await axios.get(`http://127.0.0.1:8000/api/v0.1/getInstructorCourses`,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }