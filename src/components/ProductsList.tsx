import { Box, Container } from "@mui/system";

import { useMemo } from "react";
import { IData } from "../interfaces";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";
import { Typography } from "@mui/material";

const ProductsList = () => {
  const url = "https://laptop-uz.onrender.com/api/product?page=2";
  const { data, loading, error } = useFetch<IData>(url);
  const memoized = useMemo(() => {
    return data?.products;
  }, [data]);
  //   const [data, setData] = useState<IProduct[]>([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://laptop-uz.onrender.com/api/product?page=2"
  //         );
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`);
  //         }

  //         const data = await response.json();

  //         //Set the result to the state
  //         setData(data.products);

  //         //You can do further processing with the data here
  //       } catch (error) {
  //         // Handle errors
  //         //console.error("Error during fetch:", error.message);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  return (
    <Box component={"section"}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {loading && <Typography variant="h1">...Loading</Typography>}
        {error && <Typography variant="h1">{error.message}</Typography>}
        {memoized?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Container>
    </Box>
  );
};
export default ProductsList;
