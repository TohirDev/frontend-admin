import { Box, Container } from "@mui/material";
import {
  partnerlogo1,
  partnerlogo2,
  partnerlogo3,
  partnerlogo4,
  partnerlogo5,
  partnerlogo6,
  partnerlogo7,
} from "../../../../assets";
import "./styled.css";
const Partners = () => {
  return (
    <Container
      component={"section"}
      maxWidth={"xl"}
      sx={{
        py: 4,
        overflow: "hidden",
        img: {
          m: 2,
        },
      }}
    >
      <div className="inner-wrapper">
        <Box component={"img"} src={partnerlogo1}></Box>
        <Box component={"img"} src={partnerlogo2}></Box>
        <Box component={"img"} src={partnerlogo3}></Box>
        <Box component={"img"} src={partnerlogo4}></Box>
        <Box component={"img"} src={partnerlogo5}></Box>
        <Box component={"img"} src={partnerlogo6}></Box>
        <Box component={"img"} src={partnerlogo7}></Box>

        <Box component={"img"} src={partnerlogo1}></Box>
        <Box component={"img"} src={partnerlogo2}></Box>
        <Box component={"img"} src={partnerlogo3}></Box>
        <Box component={"img"} src={partnerlogo4}></Box>
        <Box component={"img"} src={partnerlogo5}></Box>
        <Box component={"img"} src={partnerlogo6}></Box>
        <Box component={"img"} src={partnerlogo7}></Box>
      </div>
    </Container>
  );
};

export default Partners;
