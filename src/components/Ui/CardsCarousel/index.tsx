import { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import { CustomLeftArrow, CustomRightArrow } from "./Arrows";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./ui/responsive";
import "./ui/style.css";

//component
function CardsCarousel({ children }: { children: ReactNode }) {
  return (
    <div style={{ paddingLeft: "10px" }}>
      <Carousel
        customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
        customRightArrow={<CustomRightArrow onClick={() => {}} />}
        responsive={responsive}
      >
        {children}
      </Carousel>
    </div>
  );
}

export default CardsCarousel;
