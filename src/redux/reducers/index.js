import { combineReducers } from "redux";
import userListReducer from "./userListReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  userList: userListReducer,
});

export default rootReducer;
