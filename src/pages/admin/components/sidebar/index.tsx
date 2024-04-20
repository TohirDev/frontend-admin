import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";

import { ERoutes } from "../../../../enum/routes";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, Typography } from "@mui/material";
import { ListItemLink } from "./components/ListItemLink";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function SideNav() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={true}>
        <DrawerHeader>
          <Typography variant="body1">Laptop Uzbekistan</Typography>
        </DrawerHeader>
        <List>
          <ListItemLink
            text="Elonlar"
            path={ERoutes.AdminAnnouncement}
            key={1}
            icon={<LaptopChromebookIcon />}
          />
          <ListItemLink
            text="Settings"
            path={ERoutes.AdminSettings}
            key={2}
            icon={<SettingsIcon />}
          />
        </List>
        <Box sx={{ display: "flex", flex: 1 }}></Box>
        <Button
          variant="contained"
          sx={{
            fontWeight: 700,
            color: "white",
            mx: 2,
            mb: 4,
            background: "red",
            "&:hover": {
              background: "white",
              color: "red",
            },
          }}
        >
          Log Out
        </Button>
      </Drawer>
    </Box>
  );
}
