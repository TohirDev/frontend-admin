import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImagesCarousel({ images }: { images: string[] }) {
  // showThumbs={false} autoPlay autoFocus
  return (
    <ReactResponsiveCarousel>
      {images &&
        images.map((path, i) => (
          <div key={i}>
            <img src={path} alt="" />
          </div>
        ))}
    </ReactResponsiveCarousel>
  );
}

export default ImagesCarousel;
