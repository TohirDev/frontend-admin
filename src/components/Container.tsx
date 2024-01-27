import { Box } from "@mui/material";
import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
  style?: Record<string, unknown>;
};

const Container = ({ children, style }: TContainer) => {
  return (
    <Box
      component={"div"}
      sx={{ margin: "0 auto", width: "1350px", maxWidth: "1350px", ...style }}
    >
      {children}
    </Box>
  );
};

export default Container;
