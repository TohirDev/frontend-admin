//mui styled components
import { Container } from "@mui/material";
import DragToScroll from "../../Ui/DragToScroll";
import ProductCard from "../ProductCard";
import { IProduct } from "../ProductCard/constants";
import SlideProductsFilter from "../SlideProductsFilter";
import {
  SlidesWrapper,
  LeftBanner,
  LeftBannerTitle,
  LeftBannerLink,
} from "./styled";

//props
interface Props {
  productsData: IProduct[];
  bannerTitle: string;
  bannerImage: string;
  filter?: boolean;
  filterOptions?: string;
}

//index component
const SlideProducts = (props: Props) => {
  const { bannerTitle, bannerImage, productsData, filter, filterOptions } =
    props;
  return (
    <Container maxWidth={"xl"}>
      {filter && <SlideProductsFilter tabs={filterOptions} />}
      <SlidesWrapper
        sx={{
          display: "flex",
          alignItems: { xs: "none", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 3 },
        }}
      >
        <LeftBanner
          sx={{
            background: `url(${bannerImage})`,
            gap: { xs: 2, sm: "10px" },
            py: { xs: 6, sm: 0 },
            minWidth: { xs: "100%", sm: "233px" },
            minHeight: { xs: "100%", sm: "350px" },

            backgroundSize: { xs: "cover", sm: "cover" },
            backgroundRepeat: "no-repeat",
          }}
        >
          <LeftBannerTitle>{bannerTitle}</LeftBannerTitle>
          <LeftBannerLink href="#">See All Products</LeftBannerLink>
        </LeftBanner>

        <DragToScroll>
          {!!productsData.length &&
            productsData.map((product) => (
              <div key={product.id}>
                <ProductCard data={product} />
              </div>
            ))}
        </DragToScroll>
      </SlidesWrapper>
    </Container>
  );
};

export default SlideProducts;
