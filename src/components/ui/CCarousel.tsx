// import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
} from "../../assets";

const CCarousel = () => {
  const images = [banner1, banner2, banner3, banner4, banner5, banner6];
  return (
    <Container maxWidth={"xl"}>
      <Carousel showThumbs={false} autoPlay autoFocus>
        {images.map((img, i) => (
          <Box key={i}>
            <Box component={"img"} src={img} />
          </Box>
        ))}
      </Carousel>
    </Container>
  );
};
export default CCarousel;
