import actionTypes from "../actions/actionTypes";

const userReducer = (user = { isAuthenticated: false, user: {} }, action) => {
  let newUser;

  switch (action.type) {
    case actionTypes.userLogin:
      newUser = {
        isAuthenticated: true,
        user: {},
      };
      break;
    case actionTypes.userLogout:
      newUser = { isAuthenticated: false, user: {} };
      break;

    default:
      newUser = user;
  }
  return newUser;
};

export default userReducer;
