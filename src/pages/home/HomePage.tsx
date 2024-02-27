import { ProductsCarousel, SlideProducts } from "../../components"; //global components
import {
  Banners,
  CustomerSupport,
  Hero,
  Partners,
  SocialNews,
} from "./components"; //pages components
import { customBuilds, msiLaptops, desktops, msiMonitors } from "../../data";
import { imagebg, imagebg2, imagebg3, imagebg4 } from "../../assets";

const filter_options = "task poducts filter buttons";

const HomePage = () => {
  return (
    <>
      <Banners />

      <Hero />

      <ProductsCarousel />

      <SlideProducts
        productsData={customBuilds}
        bannerTitle="Custome Builds"
        bannerImage={imagebg}
      />

      <SlideProducts
        productsData={msiLaptops}
        bannerTitle="MSI Laptops"
        bannerImage={imagebg2}
        filter
        filterOptions={filter_options}
      />

      <SlideProducts
        productsData={desktops}
        bannerTitle="Desktops"
        bannerImage={imagebg3}
        filter
        filterOptions={filter_options}
      />

      <SlideProducts
        productsData={msiMonitors}
        bannerTitle="Gaming Monitors"
        bannerImage={imagebg4}
      />

      <Partners />

      <SocialNews />

      <CustomerSupport />
    </>
  );
};

export default HomePage;
