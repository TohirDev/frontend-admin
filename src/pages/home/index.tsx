import { Box, Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import {
  suport,
  account,
  saving,
  partnerlogo1,
  partnerlogo2,
  partnerlogo3,
  partnerlogo4,
  partnerlogo5,
  partnerlogo6,
  partnerlogo7,
} from "../../assets";

import HomePage from "./HomePage";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomePage />
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
            With big discounts, free delivery and a dedicated support
            specialist.
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
      <Box component={"section"} py={4}>
        <Container maxWidth={"xl"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            <Box component={"img"} src={partnerlogo1}></Box>
            <Box component={"img"} src={partnerlogo2}></Box>
            <Box component={"img"} src={partnerlogo3}></Box>
            <Box component={"img"} src={partnerlogo4}></Box>
            <Box component={"img"} src={partnerlogo5}></Box>
            <Box component={"img"} src={partnerlogo6}></Box>
            <Box component={"img"} src={partnerlogo7}></Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
