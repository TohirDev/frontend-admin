//hook
// import useFetch from "../hooks/useFetch";

//Api Data
// import { IData } from "../interfaces";

//mui
import { Box, Container, Stack, Link, Typography } from "@mui/material";

//react-multi-carousel package
import CarouselReact from "./Carousel";

//components
import ShoppingCard from "./Shop/ShoppingCard";

// data
import { products } from "./Shop/ShoppingCard/constants";

import { ziplogo } from "../assets";

const ProductsList = () => {
  // const { data, loading, error } = useFetch<IData>(
  //   `https://laptop-uz.onrender.com/api/product?page=${page}`
  // );
  //console.log(data, loading, error)

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          height: { xs: "fit-content", md: "450px" },
          mt: 4,
          px: 0,
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            px: { xs: "8px", sm: "20px" },
            mb: { xs: "-10px", md: "-43px" },
          }}
        >
          <Typography
            variant="h6"
            component={"h2"}
            sx={{
              color: "black",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "33px",
              fontWeight: 600,
              fontSize: "22px",
            }}
          >
            New Products
          </Typography>
          <Link
            href={"#"}
            sx={{
              fontSize: "13px",
              fontFamily: "Poppins, sans-serif",
              color: "#0156FF",
            }}
          >
            See All New Products
          </Link>
        </Stack>

        <CarouselReact>
          {products.map((product) => (
            <ShoppingCard key={product.id} data={product} />
          ))}
        </CarouselReact>
      </Container>

      <Box
        sx={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          px: "25px",
          justifyContent: "center",
          bgcolor: "#F5F7FF",
          mb: "35px",
        }}
      >
        <img src={ziplogo} alt="ziplogo" />

        <Typography
          sx={{
            color: "#272560",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 400,
            pl: "10px",
            ml: "10px",
            borderLeft: "2px solid #00AEB8",
          }}
        >
          <strong>own</strong> it now, up to 6 months interest free
          <Box
            component={"span"}
            sx={{
              textDecoration: "underline",
              fontSize: "13px",
              pl: "5px",
              cursor: "pointer",
            }}
          >
            learn more
          </Box>
        </Typography>
      </Box>
    </>
  );
};

export default ProductsList;
