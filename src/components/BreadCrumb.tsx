import { Box, Typography } from "@mui/material";

type TBreadCrumb = {
  title: string;
  subtitleOne: string;
  subtitleTwo: string;
};

function BreadCrumb({ title, subtitleOne, subtitleTwo }: TBreadCrumb) {
  return (
    <Box>
      <Typography sx={{ color: "#000", fontSize: "25px" }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#eee",
          fontSize: "14px",
        }}
      >
        <Typography>{subtitleOne}</Typography>
        <Typography>{subtitleTwo}</Typography>
      </Box>
    </Box>
  );
}

export default BreadCrumb;
