import { Route, Routes, Navigate } from "react-router-dom";
import CreateAccountPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import { useAuthStore } from "../store/useAuthStore";

export default function AuthRoute() {
  const { authUser } = useAuthStore();

  // If user is already logged in, redirect to homepage
  if (authUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<CreateAccountPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
