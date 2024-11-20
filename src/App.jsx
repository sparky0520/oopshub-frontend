import CreateCompanyPage from "./pages/CreateCompanyPage";
import JoinCompanyPage from "./pages/JoinCompanyPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/join-company" element={<JoinCompanyPage />} />
        <Route path="/create-company" element={<CreateCompanyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
