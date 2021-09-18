const initState = {
  userId: null,
  token: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "user/login":
      console.log("login performed: ", action.payload);
      return action.payload;
    case "user/logout":
      console.log("logging out");
      return action.payload;
    default:
      return state;
  }
};
export default authReducer;
