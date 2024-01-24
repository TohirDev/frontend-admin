import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/auth/login";
import RegistrationPage from "./pages/auth/registeration";
import HomePage from "./pages/home";
import PageNotFound from "./pages/404";
import MainLayout from "./pages/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} index />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
