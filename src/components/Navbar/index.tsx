import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//mui
import {
  Box,
  Button,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";

//mui icons
import { Search, ShoppingCart } from "@mui/icons-material";

//hooks
import useResponsive from "../../hooks/useResponsive";

//components
import Logo from "../Logo";
import WorkingHours from "./components/WorkingHours";
import NavMenu from "./components/Menu/NavMenu";
import SearchBase from "./components/Search";
import UserMenu from "./components/Menu/UserMenu";

//links
import { pages } from "./constants";

//assets
import { social1, social2 } from "../../assets";

// main navbar component
function Navbar() {
  //hooks
  const isTablet = useResponsive("up", "md", "xs");
  const navigate = useNavigate();

  //state
  const [SearchIsActive, setSearchIsActive] = useState<boolean>(false);
  return (
    <Grid component={"header"} container fontFamily={"Poppins"}>
      <Grid item xs={12} bgcolor={"black"} color={"white"}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: { xs: "40px", md: "44px" },
          }}
        >
          <WorkingHours />

          <Typography
            variant="caption"
            fontFamily={"Poppins, sans-serif"}
            fontWeight={600}
            color={"#ACACAC"}
          >
            {isTablet &&
              "Visit our showroom in 1234 Street Adress City Address, 1234 "}
            <Box
              component={"span"}
              color={"white"}
              sx={{ borderBottom: "2px solid white", cursor: "pointer" }}
            >
              Contact Us
            </Box>
          </Typography>

          {isTablet && (
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"right"}
              gap={"10px"}
            >
              <Typography
                variant="caption"
                fontFamily={"Poppins, sans-serif"}
                fontWeight={600}
                lineHeight={1.6}
              >
                Call Us: (00) 1234 5678
              </Typography>

              <Box maxHeight={20} display={"flex"} gap={"3px"}>
                <a href="#" target="_blank">
                  <Box component={"img"} src={social1} alt="facebook" />
                </a>
                <a href="#" target="_blank">
                  <Box component={"img"} src={social2} alt="instagram" />
                </a>
              </Box>
            </Box>
          )}
        </Container>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          bgcolor: {
            xs: "#0156FF",
            md: "#f1eaea70",
          },
          borderBottom: { xs: "none", md: "1px solid #CACDD8" },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 92,
            py: "15px",
          }}
        >
          <Logo color={{ xs: "#FFF", md: "#0156FF" }} />

          <NavMenu />

          <SearchBase isActive={SearchIsActive} />

          <Box
            display={SearchIsActive ? "none" : { xs: "none", md: "flex" }}
            flexWrap={"wrap"}
            alignItems={"center"}
            columnGap={"25px"}
            rowGap={1}
            ml={"25px"}
          >
            {!!pages &&
              pages.map((page, i) =>
                page.name === "Our Deals" ? (
                  <Button
                    key={i}
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
                    key={i}
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
                )
              )}
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"right"}
            gap={"15px"}
            ml={"25px"}
          >
            <Box
              component={"div"}
              onClick={() => setSearchIsActive((prev) => !prev)}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Tooltip title="clicking opens the search or closes it">
                <Search
                  sx={{
                    color: { xs: "#FFF", md: "#0000008a" },
                  }}
                />
              </Tooltip>
            </Box>

            <ShoppingCart sx={{ color: { xs: "#FFF", md: "#0000008a" } }} />

            <UserMenu />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Navbar;
