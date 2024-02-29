import { Grid, Link, Stack, styled } from "@mui/material";

export const FooterWrapper = styled("footer")({
  color: "#FFF",
  backgroundColor: "#000",
  padding: "47px 0px",
});
export const FooterHeader = styled(Stack)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
    gap: "25px",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));
export const FooterBody = styled(Grid)({
  marginTop: "42px",
});

export const FooterBodyNavLink = styled(Link)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "13px",
  fontWeight: 400,
  color: "white",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
});
