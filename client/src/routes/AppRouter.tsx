import { Suspense, lazy, useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { LoginContextProvider } from "../contexts/auth/LoginContext";
import { RegisterContextProvider } from "../contexts/auth/RegisterContext";
import { UserContextProvider } from "../contexts/UserContext";

const HomePage = lazy(() => import("../pages/home"));
const UserPage = lazy(() => import("../pages/user"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage"));

export default function AppRouter() {
  const { isLogin } = useContext(AppContext);

  useEffect(() => {
    if (isLogin == "" && window.location.pathname !== "/auth/login") {
      window.location.href = "/auth/login";
    }
  }, []);
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/auth/login"
            element={
              <LoginContextProvider>
                <LoginPage />
              </LoginContextProvider>
            }
          />
          <Route
            path="/auth/register"
            element={
              <RegisterContextProvider>
                <RegisterPage />
              </RegisterContextProvider>
            }
          />
          <Route
            path="/user"
            element={
              <UserContextProvider>
                <UserPage />
              </UserContextProvider>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}
