import axios from "axios";
import { loadUsersAction, userRegisterAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_API_URL;

export const loadUsersThunk = () => async (dispatch) => {
  const { token } = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );

  const response = await axios.get(urlApi + "/users", {
    headers: { Authorization: "Bearer " + token },
  });

  dispatch(loadUsersAction(response.data));
};

export const createUserThunk = (user) => async (dispatch) => {
  const newUser = await axios.post(urlApi + "/users/register", user);
  if (newUser.status === 200) {
    dispatch(userRegisterAction(newUser.data));
  }
};
