import LandingPage from "./pages/LandingPage";
import { Route, Routes, useLocation } from "react-router";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import ChangePass from "./pages/ChangePassPage";
import ForgotPass from "./pages/ForgotPassPage";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route path="change" element={<ChangePass />} />
        <Route path="forgot" element={<ForgotPass />} />
      </Routes>
    </>
  );
}

export default App;
