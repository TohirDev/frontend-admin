import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <>
      <h1>MainLayaut</h1>
      <Outlet />
    </>
  );
};

export default MainLayout;
