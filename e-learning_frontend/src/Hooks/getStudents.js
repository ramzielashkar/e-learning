import axios from 'axios';
export const getStudents = async (token) => {
    const res = await axios.get("http://127.0.0.1:8000/api/v0.1/getStudent",{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }