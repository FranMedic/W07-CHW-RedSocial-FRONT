import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  createUserThunk,
  loadUsersThunk,
} from "../redux/thunks/userListThunks";

const useUserList = () => {
  const userList = useSelector((store) => store.userList);
  const dispatch = useDispatch();

  const loadUsers = useCallback(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  const createUser = useCallback(
    async (user) => {
      const responseStatus = await dispatch(createUserThunk(user));
      return responseStatus;
    },
    [dispatch]
  );

  return {
    userList,
    loadUsers,
    createUser,
  };
};

export default useUserList;
