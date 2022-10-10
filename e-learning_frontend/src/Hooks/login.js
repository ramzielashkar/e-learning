import axios from 'axios';
export const login = async (data) => {
    const res = await axios.post("http://127.0.0.1:8000/api/v0.1/login", data,{
        headers: {
          "Content-type": "application/json",
        },
      });
      return res;
 }