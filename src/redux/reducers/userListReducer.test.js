import { getFakeUser, getFakeUsers } from "../../factories/usersFactory";
import { loadUsersAction } from "../actions/actionCreators";
import actionTypes from "../actions/actionTypes";
import userListReducer from "./userListReducer";

describe("given userListReducer reducer", () => {
  describe("when iy receives a list of users", () => {
    describe("and a loadUsers action", () => {
      test("then it should return a list with the users to load", () => {
        const userList = [];
        const fakeUsersList = getFakeUsers();
        const action = loadUsersAction(fakeUsersList);

        const newUserList = userListReducer(userList, action);

        expect(newUserList).toEqual(fakeUsersList);
      });
    });
  });
});
