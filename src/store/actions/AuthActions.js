import { createUserApi } from "../../UserApi";
const userApi = createUserApi();
// thunk needs to return a function
export const loginUser = (email, password) => {
  // an arrow function that returns the dispatch method to the reducer
  return async (dispatch, getState) => {
    try {
      // make async call to db using the dispatch method
      var result = await userApi.loginUser(email, password);
      console.log("login result: ", result);
      // carry on with the dispatch after the async call performed
      dispatch({
        type: "user/login",
        payload: { userId: result.userId, token: result.id },
      });
      alert("Logged In!");
    } catch (e) {
      // TODO: better error handling
      console.log(e);
      alert(e);
    }
  };
};
export const logoutUser = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "user/logout",
      payload: { userId: null, token: null },
    });
  };
};
