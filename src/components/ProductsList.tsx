import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { IData } from "../interfaces";
import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch<IData>(
    `https://laptop-uz.onrender.com/api/product?page=${page}`
  );
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event); //event
    setPage(value);
  };

  return (
    <Box component={"section"} bgcolor={"#e0e0e0"} py={3}>
      <Container maxWidth="xl">
        <Typography variant="h3" py={2}>
          Laptops
        </Typography>

        {loading && <Typography variant="h1">...Loading</Typography>}
        {error && <Typography variant="h1">{error.message}</Typography>}
        {/* 
        {data?.products?.map((product) => (
          
        ))} */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data?.products?.map((laptop, i) => (
            <Grid item xs={2} sm={4} md={2} key={i}>
              <ProductCard key={laptop._id} product={laptop} />
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination count={data?.pages} page={page} onChange={handleChange} />
        </Stack>
      </Container>
    </Box>
  );
};
export default ProductsList;
