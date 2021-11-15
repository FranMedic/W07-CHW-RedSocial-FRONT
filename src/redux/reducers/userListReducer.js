import actionTypes from "../actions/actionTypes";

const userListReducer = (userList = [], action) => {
  let newUserList;

  switch (action.type) {
    case actionTypes.loadUsers:
      newUserList = [...action.users];
      break;
    case actionTypes.userRegister:
      newUserList = [...userList, action.user];
      break;
    default:
      newUserList = userList;
  }
  return newUserList;
};

export default userListReducer;
