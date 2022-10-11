import axios from 'axios';
export const getSubmissions = async (token) => {
    const res = await axios.get("http://127.0.0.1:8000/api/v0.1/getAllSubmissions",{
        headers: {
          "Content-type": "application/json",
          'Authorization' : "Bearer" + token
        },
      });
      return res;
 }