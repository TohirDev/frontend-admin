import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//mui
import { IconButton, Menu, Box, MenuItem, Button } from "@mui/material";

//mui icons
import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

//links
import { pages } from "../../constants";

//components
import Logo from "../../../Logo";

function NavMenu() {
  //navigates
  const navigate = useNavigate();

  //state
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{
          height: { xs: "30px", sm: "35px" },
          p: 0,
          ml: "15px",
          display: { xs: "block", md: "none" },
        }}
      >
        <MenuIcon
          sx={{
            color: "#FFF",
            fontSize: { xs: "30px", sm: "35px" },
          }}
        />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 0, left: 0 }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        <Box sx={{ width: "336px" }}>
          <Box
            sx={{
              width: "93%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid  #CACDD8",
              px: "16px",
              py: "15px",
            }}
          >
            <Logo />
            <Box onClick={handleCloseNavMenu}>
              <Close
                fontSize="large"
                sx={{ color: "#0000008a", cursor: "pointer" }}
              />
            </Box>
          </Box>

          {pages.map((page, i) => (
            <MenuItem key={i}>
              {page.name === "Our Deals" ? (
                <Button
                  onClick={() => navigate(page.path)}
                  variant="outlined"
                  sx={{
                    py: 1,
                    px: 3.25,
                    border: "2px solid #0156FF",
                    fontFamily: "Poppins, sans-serif",
                    borderRadius: "50px",
                    lineHeight: "21px",
                    textDecoration: "none",
                    color: "#0156FF",
                    "&:hover": {
                      border: "2px solid #0156FF",
                      bgcolor: "#1976d238",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ) : (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                  to={page.path}
                >
                  {page.name}
                </Link>
              )}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </>
  );
}

export default NavMenu;
