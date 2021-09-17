import { createLoginApi } from "../../LoginApi";
// thunk needs to return a function
export const loginUser = (email, password) => {
  const loginApi = createLoginApi();
  // an arrow function that returns the dispatch method to the reducer
  return async (dispatch, getState) => {
    try {
      // make async call to db using the dispatch method
      var result = await loginApi.loginUser(email, password);
      console.log("login result: ", result);
      // carry on with the dispatch after the async call performed
      dispatch({
        type: "user/login",
        payload: { userId: result.userId, token: result.id },
      });
      alert('Logged In!')
    } catch (e) {
      // TODO: better error handling
      console.log(e);
      alert("Wrong email or password!");
    }
  };
};
