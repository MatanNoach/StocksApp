import axios from "axios";
const basicServerAdress = "http://localhost:3001/api/";
export const createUserApi = () => {
  return {
    loginUser(email, password) {
      const credentials = {
        email: email,
        password: password,
      };
      try {
        const url = basicServerAdress + "users/login";
        var data = axios.post(url, credentials).then((res) => res.data);
        return data;
      } catch (e) {
        throw new Error(e);
      }
    },
    createUser(email, password) {
      const credentials = {
        email: email,
        password: password,
      };
      try {
        const url = basicServerAdress + "users/signUp";
        var data = axios.post(url, credentials).then((res) => res.data.data);
        return data;
      } catch (e) {
        throw new Error(e);
      }
    },
    getUserStocks(userId) {
      const url = basicServerAdress + "users/" + userId + "/stocks";
      var data = axios.get(url).then((res) => res.data.stocks);
      return data;
    },
  };
};
