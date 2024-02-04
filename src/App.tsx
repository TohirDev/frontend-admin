import { Route, Routes } from "react-router-dom";
import { ERoutes } from "./enum/routes";
import LoginPage from "./pages/auth/login";
import RegistrationPage from "./pages/auth/registeration";
import Home from "./pages/home";
import PageNotFound from "./pages/404";
import MainLayout from "./pages/layout";
import AdminPage from "./pages/admin";
import Elonlar from "./pages/admin/components/elonlar";
import Settings from "./pages/admin/components/settings";

function App() {
  return (
    <Routes>
      <Route path={ERoutes.Root} element={<MainLayout />}>
        <Route path={ERoutes.RootHomePage} element={<Home />} index />
        <Route path={ERoutes.LoginPage} element={<LoginPage />} />
        <Route
          path={ERoutes.RegistrationPage}
          element={<RegistrationPage />}
        />
        <Route path={ERoutes.NotFoundPage} element={<PageNotFound />} />
        <Route path={ERoutes.AdminPage} element={<AdminPage />} />
        <Route path={ERoutes.Elonlar} element={<Elonlar />} />
        <Route path={ERoutes.Elonlar} element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
