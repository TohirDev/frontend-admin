import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../interfaces";
interface IProductCardProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProductCardProps) => {
  console.log(product);
  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardMedia sx={{ flex: 1, textAlign: "center" }}>
          <Box
            component={"img"}
            src={product?.Image[2].url}
            width={"150px"}
            sx={{ borderRadius: "4px" }}
          ></Box>
        </CardMedia>
        <CardContent sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Typography variant="h5">{product.model_name}</Typography>
          <Typography variant="body1" fontWeight={"bold"}>
            {product.__v}
          </Typography>
          <Box>
            <Typography variant="body1">{product.location}</Typography>
            <Typography variant="body1">{product.status}</Typography>
            <Typography variant="body1">{product.phone_number}</Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
export default ProductCard;
