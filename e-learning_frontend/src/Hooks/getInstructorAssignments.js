import axios from 'axios';
export const getAssignments = async (token) => {
    const res = await axios.get(`http://127.0.0.1:8000/api/v0.1/getAssignments`,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }