import { Toolbar, Box, styled } from "@mui/material";

const SToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const SLogo = styled(Box)({
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
});

const SUserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export { SToolbar, SLogo, SUserBox };
