import axios from 'axios';
export const submitAssignment = async (data, token) => {
    const res = await axios.post("http://127.0.0.1:8000/api/v0.1/submitAssignment", data,{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }