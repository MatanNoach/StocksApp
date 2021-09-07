import axios from "axios";
const basicServerAdress = "http://localhost:3001/";
export const createLoginApi = () => {
  return {
    findUser(email, password) {
      const filter = {
        where: {
          email: email,
          password: password,
        },
      };
      const url =
        basicServerAdress +
        "users?filter="+JSON.stringify(filter); 
        console.log(url);
      var data = axios.get(url).then((res) => res.data);
      return data;
    },
  };
};
