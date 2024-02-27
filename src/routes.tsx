import { useRoutes } from "react-router-dom";
import { ERoutes } from "./enum/routes";

import MainLayout from "./pages/layout";
import Home from "./pages/home";
import LoginPage from "./pages/auth/login";
import RegistrationPage from "./pages/auth/registeration";
import AdminPage from "./pages/admin";
import Elonlar from "./pages/admin/components/elonlar";
import Settings from "./pages/admin/components/settings";
import PageNotFound from "./pages/404";

export default function Router() {
  const routes = useRoutes([
    {
      path: ERoutes.Root,
      element: <MainLayout />,
    },
    {
      path: ERoutes.RootHomePage,
      element: <Home />,
      index: true,
    },
    {
      path: ERoutes.LoginPage,
      element: <LoginPage />,
    },
    {
      path: ERoutes.RegistrationPage,
      element: <RegistrationPage />,
    },
    {
      path: ERoutes.AdminPage,
      element: <AdminPage />,
    },
    {
      path: ERoutes.AdminAnnouncement,
      element: <Elonlar />,
    },
    {
      path: ERoutes.AdminSettings,
      element: <Settings />,
    },
    {
      path: ERoutes.NotFoundPage,
      element: <PageNotFound />,
    },
  ]);

  return routes;
}
