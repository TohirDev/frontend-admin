import { Box } from "@mui/material";
import { ImagesCarousel } from "../../../../components";
import { banners } from "../../../../assets";

const Banners = () => {
  return (
    <Box>
      <ImagesCarousel images={banners} />
    </Box>
  );
};

export default Banners;
