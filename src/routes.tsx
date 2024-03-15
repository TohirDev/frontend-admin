import { useRoutes } from "react-router-dom";
import { ERoutes } from "./enum/routes";

import MainLayout from "./pages/layout";
import Home from "./pages/home";
import LoginPage from "./pages/auth/login";
import RegistrationPage from "./pages/auth/registeration";
import PageNotFound from "./pages/404";
import Layout from "./pages/layout/layout";

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
      path: ERoutes.AdminAnnouncement,
      element: <Layout />,
    },
    {
      path: ERoutes.AdminSettings,
      element: <Layout />,
    },
    {
      path: ERoutes.NotFoundPage,
      element: <PageNotFound />,
    },
  ]);

  return routes;
}
