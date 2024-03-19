import { Box } from "@mui/material";
import SideNav from "../admin/components/sidebar";
import { useLocation } from "react-router-dom";
import { Elonlar } from "@/pages/admin/components/elonlar/index";
import Settings from "@/pages/admin/components/settings";

function Layout() {
  const { pathname } = useLocation();
  return (
    <Box sx={{ display: "flex" }}>
      {pathname === "/admin/elonlar" || pathname === "/admin/settings" ? (
        <SideNav />
      ) : null}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {pathname === "/admin/elonlar" ? (
          <Elonlar />
        ) : pathname === "/admin/settings" ? (
          <Settings />
        ) : null}
      </Box>
    </Box>
  );
}

export default Layout;
