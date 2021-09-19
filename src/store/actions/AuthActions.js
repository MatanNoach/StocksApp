import { createUserApi } from "../../UserApi";
const userApi = createUserApi();
// thunk needs to return a function
export const loginUser = (email, password) => {
  // an arrow function that returns the dispatch method to the reducer
  return async (dispatch, getState) => {
    try {
      // make async call to log in user
      userApi.loginUser(email, password).then((res) => {
        // when done, dispatch a user/login action
        dispatch({
          type: "user/login",
          payload: { userId: res.userId, token: res.id },
        });
        alert("Logged In!");
      });
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
export const createUser = (email, password) => {
  return async (dispatch, getState) => {
    try {
      // make async call to create the user
      userApi.createUser(email, password).then((res) => {
        // when done, dispatch a user/create action
        dispatch({
          type: "user/create",
          payload: { userId: res.userId, token: res.id },
        });
        alert("User Created!");
      });
    } catch (e) {
      // TODO: better error handling
      console.log(e);
      alert(e);
    }
  };
};
