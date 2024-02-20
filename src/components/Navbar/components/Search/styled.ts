import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

export const SearchWrapper = styled("div")({
  position: "relative",
  borderRadius: "31px",
  backgroundColor: "#F5F7FF",
  width: "100%",

  "&:hover": {
    backgroundColor: "#f4f4f4",
  },
});

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  color: "inherit",
  "& .MuiInputBase-input": {
    width: "100%",

    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",

    // vertical padding + font size from searchIcon
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),

    "&::placeholder": {
      color: "#A2A6B0",
      fontSize: "16px",
      fontWeigth: 400,
      fontFamily: "Poppins, sans-serif",
    },
  },
}));
