// import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { banner } from "../../assets";

const CCarousel = () => {
  const images = [banner, banner, banner];
  return (
    <Container maxWidth={"xl"}>
      <Carousel showThumbs={false} autoPlay>
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
