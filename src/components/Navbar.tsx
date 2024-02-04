import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Login } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Typography,
} from "@mui/material";
import { SToolbar, SLogo, SUserBox } from "./styled.ts";
import { headerlogo } from "../assets/index.ts";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <SToolbar sx={{ height: "44px", bgcolor: "black", color: "white" }}>
        <Typography variant="body1" sx={{ color: "#ACACAC" }}>
          Visit our showroom in 1234 Street Adress City Address, 1234
          <span
            style={{
              color: "white",
              borderBottom: "1px solid white",
              marginLeft: "15px",
              cursor: "pointer",
            }}
          >
            {" "}
            Contact Us
          </span>
        </Typography>

        <Box>
          <Button variant="text">Call Us: (00) 1234 5678</Button>
          <IconButton>
            <Facebook sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <Instagram sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </SToolbar>

      <AppBar position="sticky" sx={{ bgcolor: "#f1f1f1", color: "black" }}>
        <SToolbar>
          <Box display={"flex"}>
            <SLogo>
              <Box
                onClick={() => navigate("/")}
                component={"img"}
                src={headerlogo}
              />
            </SLogo>
            <ButtonGroup
              sx={{
                paddingLeft: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Button
                variant="text"
                sx={{
                  color: "black",
                  "&:hover": {
                    color: "blue",
                    textDecoration: "underline",
                  },
                }}
              >
                Laptops
              </Button>
              <Button
                variant="text"
                sx={{
                  color: "black",
                  "&:hover": {
                    color: "blue",
                    textDecoration: "underline",
                  },
                }}
              >
                All Other Products
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{ borderRadius: "50px" }}
              >
                Our Deals
              </Button>
            </ButtonGroup>
          </Box>

          <SUserBox>
            <Button
              variant="contained"
              startIcon={<Login />}
              sx={{ textTransform: "none" }}
              onClick={() => navigate("/login")}
            >
              Tizimga kirish
            </Button>
          </SUserBox>
        </SToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
