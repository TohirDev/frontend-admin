import styled from "@mui/styles/styled/styled";

const Wrapper = styled("div")({
  minHeight: "fit-content",

  display: "flex",
  overflowX: "auto",
  userSelect: "none",

  "&::-webkit-scrollbar": {
    width: 0,
    height: 0,
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: " 5px",
    "&:hover": {
      backgroundColor: "#555",
    },
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "none",
  },
});

export default Wrapper;
