import actionTypes from "./actionTypes";

export const userLoginAction = (user) => ({
  type: actionTypes.userLogin,
  user,
});

export const userLogoutAction = () => ({
  type: actionTypes.userLogout,
});

export const userRegisterAction = (user) => ({
  type: actionTypes.userRegister,
  user,
});

export const loadUsersAction = (users) => ({
  type: actionTypes.loadUsers,
  users,
});
