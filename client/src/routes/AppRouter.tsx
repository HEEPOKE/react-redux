import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "../contexts/UserContext";

const HomePage = lazy(() => import("../pages/home"));
const UserPage = lazy(() => import("../pages/user"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage"));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route
            path="/user"
            element={
              <UserContextProvider>
                <UserPage />{" "}
              </UserContextProvider>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}
