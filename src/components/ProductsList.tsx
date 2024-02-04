import { useState } from "react";
import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { IData } from "../interfaces";
import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch<IData>(
    `https://laptop-uz.onrender.com/api/product?page=${page}`
  );
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event);
    setPage(value);
  };

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
        {data?.products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}

        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination count={data?.pages} page={page} onChange={handleChange} />
        </Stack>
      </Container>
    </Box>
  );
};
export default ProductsList;
