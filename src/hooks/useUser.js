const { useDispatch } = require("react-redux");
const { useSelector } = require("react-redux");
const { userLogoutAction } = require("../redux/actions/actionCreators");
const { userLoginThunk } = require("../redux/thunks/userThunks");

const useUser = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const login = (user) => {
    dispatch(userLoginThunk(user));
  };
  const logout = () => {
    dispatch(userLogoutAction());
  };

  return {
    user,
    login,
    logout,
  };
};

export default useUser;
