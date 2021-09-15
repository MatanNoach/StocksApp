import axios from "axios";
const basicServerAdress = "http://localhost:3001/api/";
export const createLoginApi = () => {
  return {
    loginUser(email, password) {
      const credentials = {
        email: email,
        password: password,
      };
      const url = basicServerAdress + "users/login";
      var data = axios.post(url, credentials).then((res) => res.data);
      return data;
    },
    createUser(email, password) {
      const credentials = {
        email: email,
        password: password,
      };
      const url = basicServerAdress + "users/signUp";
      var data = axios.post(url, credentials).then((res) => res.data);
      return data;
    },
  };
};
