import { userLoginAction, userLogoutAction } from "../actions/actionCreators";

import userReducer from "./userReducer";

describe("Given a userReducer reducer", () => {
  describe("when it receives a user object with a property isAuthenticated as false and a list of user empty", () => {
    describe("and a login action with a user", () => {
      test("then it should return an new user list with the authenticated as true", () => {
        const userFake = {
          name: "Franny",
          username: "frannyLove",
          password: "frannylovesyou",
          photo: "patata",
          enemies: [],
          friends: [],
          bio: "Holi bebe! ",
        };
        const action = userLoginAction(userFake);
        const expecteduser = {
          isAuthenticated: true,
          user: userFake,
        };

        const newUser = userReducer(userFake, action);

        expect(newUser).toEqual(expecteduser);
      });
    });

    describe("and a logout action", () => {
      test("then it should return a new user with an empty object and a property isAuthenticated as false", () => {
        const userFake = {
          name: "Franny",
          username: "frannyLove",
          password: "frannylovesyou",
          photo: "patata",
          enemies: [],
          friends: [],
          bio: "Holi bebe! ",
        };
        const action = userLogoutAction();
        const expecteduser = {
          user: {},
          isAuthenticated: false,
        };

        const newUser = userReducer(userFake, action);

        expect(newUser).toEqual(expecteduser);
      });
    });
  });
});
