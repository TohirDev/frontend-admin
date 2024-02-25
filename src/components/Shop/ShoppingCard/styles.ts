// import { SxProps } from "@mui/system";

// export type CardStyleType = {
//   [key in "wrapper" | "header" | "media" | "content" | "border"]: SxProps;
// };

//: CardStyleType

const cardstyles = {
  wrapper: {
    // my: 4,
    // mx: 1,
    "&:first-child": {
      ml: "8px",
    },
    my: {
      md: "65px",
    },
    mt: {
      xs: "15px",
    },
    mb: {
      xs: "25px",
    },

    px: { xs: "10px", md: "25px" },
    width: "fit-content",
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    color: "#78A962",
    fontFamily: "Poppins, sans-serif",
    fontSize: "10px",
    fontWeight: 400,
  },
  border: {
    border: "0px solid black",
  },
  media: {},
  content: {
    width: "176px",
    color: "#000000",
    fontFamily: "Poppins, sans-serif",
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0px",
    textAlign: "left",
    textTransform: "uppercase",
  },
};

export default cardstyles;
