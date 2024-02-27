import { Typography, Link, Box } from "@mui/material";
import { styled } from "@mui/material";

export const SlidesWrapper = styled("div")({
  margin: "30px 0px",
  minHeight: "346px",

  display: "flex",
  alignItems: "center",
  gap: "5px",

  ".active": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    cursor: "grabbing",
    transform: "scale(1)",
  },
});

export const LeftBanner = styled(Box)({
  minWidth: "233px",
  minHeight: "350px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "5rem",

  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export const LeftBannerTitle = styled(Typography)({
  maxWidth: "100px",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "22px",
  fontWeight: 700,

  color: "rgb(255, 255, 255)",
});

export const LeftBannerLink = styled(Link)({
  fontFamily: "Poppins",
  fontSize: "13px",
  fontWeight: "400",
  opacity: 0.6,

  color: "rgb(255, 255, 255)",
  textDecorationColor: "rgb(255, 255, 255)",
  "&:hover": {
    transition: "0.3s",
    opacity: 1,
  },
});
