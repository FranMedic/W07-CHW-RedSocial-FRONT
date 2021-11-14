import { useEffect, useState } from "react";

const RegisterForm = () => {
  const initalValues = {
    name: "",
    username: "",
    password: "",
    photo: "",
  };

  const [userData, setUserData] = useState(initalValues);
  const [isDisabled, setIsDisabled] = useState(true);

  const onChangeData = (event) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (
      userData.username !== "" &&
      userData.password !== "" &&
      userData.name !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userData.name, userData.password, userData.username]);

  const userRegister = async (event) => {
    event.preventDefault();

    setUserData(initalValues);
  };

  return (
    <>
      <div className="container ">
        <section className="row justify-content-center">
          <div className=" col-4 form-container">
            <form autoComplete="off" onSubmit={userRegister} noValidate>
              <div className="mb-3 row">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={userData.name}
                  onChange={onChangeData}
                  required
                  className="mb-2 form-control"
                />
              </div>
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
              <div className="mb-3 row">
                <label htmlFor="photo" className="form-label">
                  Profile photo
                </label>
                <input
                  type="file"
                  id="photo"
                  placeholder="photo"
                  value={userData.photo}
                  onChange={onChangeData}
                  required
                  className="mb-2 form-control"
                />
              </div>

              <button
                value="Submit"
                className="btn btn-primary mt-1 mb-5"
                type="submit"
                disabled={isDisabled}
              >
                Create User
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegisterForm;
