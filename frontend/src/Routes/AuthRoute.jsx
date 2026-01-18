import { Route, Routes } from "react-router-dom";
import CreateAccountPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";

export default function AuthRoute() {
  return (
    <Routes>
      <Route path="/" element={<CreateAccountPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
