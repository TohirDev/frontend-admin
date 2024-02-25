import { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import { responsive } from "./responsive";
import "react-multi-carousel/lib/styles.css";
//custom styles
import "./style.css";

const CustomRightArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="custom-react-multiple-carousel__arrow custom-react-multiple-carousel__arrow--right custom-border-right"
      onClick={() => onClick()}
    ></button>
  );
};

const CustomLeftArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="custom-react-multiple-carousel__arrow custom-react-multiple-carousel__arrow--left custom-border-left"
      onClick={() => onClick()}
    ></button>
  );
};

//component
function ReactMultiCarousel({ children }: { children: ReactNode }) {
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

export default ReactMultiCarousel;
