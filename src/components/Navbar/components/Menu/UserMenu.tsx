import { useState } from "react";

//mui
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

//links
import { user_settings } from "../../constants";
import { NavLink } from "react-router-dom";

//component
function UserMenu() {
  //state
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            sx={{ color: { xs: "#FFF", md: "#0000008a" } }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {user_settings.map((setting) => (
          <NavLink to={setting.path}>
            <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
              <Typography
                component={"a"}
                textAlign="center"
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "Poppins, sans-serif",

                  textDecoration: "none",
                }}
              >
                {setting.name}
              </Typography>
            </MenuItem>
          </NavLink>
        ))}
      </Menu>
    </Box>
  );
}

export default UserMenu;
