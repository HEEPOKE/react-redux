import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("../pages/home"));
const UserPage = lazy(() => import("../pages/user"));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
