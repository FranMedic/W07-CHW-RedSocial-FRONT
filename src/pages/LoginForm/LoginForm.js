import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useUser from "../../hooks/useUser";

const LoginForm = () => {
  const { login } = useUser();

  const initalValues = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initalValues);
  const [isDisabled, setIsDisabled] = useState(true);

  const onChangeData = (event) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    login(userData);

    setUserData(initalValues);
  };

  useEffect(() => {
    if (userData.username !== "" && userData.password !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userData.password, userData.username]);

  return (
    <>
      <div className="container ">
        <section className="row justify-content-center">
          <div className=" col-4 form-container">
            <form autoComplete="off" onSubmit={onLogin} noValidate>
              <div className="mb-3 row">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="UserName"
                  value={userData.username}
                  onChange={onChangeData}
                  required
                  className="mb-2 form-control"
                />
              </div>
              <div className="mb-3 row">
                <label htmlFor="password" className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  value={userData.password}
                  placeholder="Password"
                  onChange={onChangeData}
                  required
                  className="form-control"
                  id="password"
                />
              </div>

              <button
                value="Submit"
                className="btn btn-primary mt-1 mb-5"
                type="submit"
                disabled={isDisabled}
              >
                Login
              </button>
            </form>
            <Link to="/signup">
              <button className="register-button btn btn-primary mt-1 mb-5">
                Don't have an account? Sign up!
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginForm;
