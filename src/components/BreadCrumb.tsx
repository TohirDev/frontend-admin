import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

type TBreadCrumb = {
  title: string;
  subtitleOne: string;
  subtitleTwo: string;
  subtitleOnePath: string;
  subtitleTwoPath: string;
};

const style = {
  color: "#e5e7eb",
};

export const BreadCrumb = ({
  title,
  subtitleOne,
  subtitleTwo,
  subtitleOnePath,
  subtitleTwoPath,
}: TBreadCrumb) => {
  return (
    <Box>
      <Typography sx={{ color: "#000", fontSize: "25px" }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#e5e7eb",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        <NavLink style={style} to={subtitleOnePath}>
          {subtitleOne}
        </NavLink>
        <Box component="span" sx={{ mx: 1 }}>
          /
        </Box>
        <NavLink style={style} to={subtitleTwoPath}>
          {subtitleTwo}
        </NavLink>
      </Box>
    </Box>
  );
};
