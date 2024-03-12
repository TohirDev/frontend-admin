import { Box, Typography } from "@mui/material";
import { account, saving, suport } from "../../../../assets";

const CustomerSupport = () => {
  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "15px",
        py: "35px",
      }}
    >
      <Box sx={{ textAlign: "center", maxWidth: "265px" }}>
        <Box component={"img"} src={suport}></Box>
        <Typography sx={{ fontWeight: "bold" }}>Product Support</Typography>
        <Typography variant="body2">
          Up to 3 years on-site warranty available for your peace of mind.
        </Typography>
      </Box>

      <Box sx={{ textAlign: "center", maxWidth: "265px" }}>
        <Box maxWidth={"65px"} component={"img"} src={account}></Box>
        <Typography sx={{ fontWeight: "bold" }}>Personal Account</Typography>
        <Typography variant="body2">
          With big discounts, free delivery and a dedicated support specialist.
        </Typography>
      </Box>

      <Box sx={{ textAlign: "center", maxWidth: "265px" }}>
        <Box component={"img"} src={saving}></Box>
        <Typography sx={{ fontWeight: "bold" }}>Amazing Savings</Typography>
        <Typography variant="body2">
          Up to 70% off new Products, you can be sure of the best price.
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomerSupport;
