import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import useUser from "./hooks/useUser";
import HomePage from "./pages/HomePage/HomePage";
import LoginForm from "./pages/LoginForm/LoginForm";

function App() {
  const { user, logout } = useUser();

  const onLogout = (event) => {
    event.preventDefault();
    logout();
    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
  };

  return (
    <>
      <Router>
        <header className="header">
          <Link to="/">
            <h1 className="title">FrannyGram</h1>
          </Link>
          {user.isAuthenticated ? (
            <div>
              <button
                className="logout-button btn btn-primary mt-1 mb-5"
                onClick={onLogout}
              >
                Log Out
              </button>
            </div>
          ) : (
            ""
          )}
        </header>
        <Routes>
          <Route
            path="/*"
            element={user.isAuthenticated ? <HomePage /> : <LoginForm />}
          />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
