import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "../contexts/UserContext";

const HomePage = lazy(() => import("../pages/home"));
const UserPage = lazy(() => import("../pages/user"));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
