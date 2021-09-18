import axios from "axios";
const basicServerAdress = "http://localhost:3001/api/";
export const createUserApi = () => {
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
      var data = axios.post(url, credentials).then((res) => res.data.data);
      return data;
    },
    getUserStocks(userId) {
      const url = basicServerAdress + "users/" + userId + "/stocks";
      var data = axios.get(url).then((res) => res.data.stocks);
      return data;
    },
  };
};
