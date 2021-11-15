import { getFakeUser, getFakeUsers } from "../../factories/usersFactory";
import { loadUsersAction, userRegisterAction } from "../actions/actionCreators";

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
  describe("When it receives a users list and a createaction with a userslist", () => {
    test("then it should return a list of tasks with the new users in it", () => {
      const users = getFakeUsers();
      const oneUsers = getFakeUser();
      const action = userRegisterAction(oneUsers);

      const newUsers = userListReducer(users, action);

      expect(newUsers).toContain(oneUsers);
    });
  });

  describe("When it receives a users list and an unknown action", () => {
    test("Then it shoul return the received users list", () => {
      const users = getFakeUsers();
      const action = {
        type: "wololo",
      };

      const newUsers = userListReducer(users, action);

      expect(newUsers).toEqual(users);
    });
  });
});
