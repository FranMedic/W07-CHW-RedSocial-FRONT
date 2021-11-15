import axios from "axios";
import { loadUsersAction } from "../actions/actionCreators";

const urlApi = "https://red-social-api.herokuapp.com/";

export const loadUsersThunk = () => async (dispatch) => {
  const { token } = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );

  const response = await axios.get(urlApi, {
    headers: { Authorization: "Bearer " + token },
  });

  dispatch(loadUsersAction(response.data));
};
