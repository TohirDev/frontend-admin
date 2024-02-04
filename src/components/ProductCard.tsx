import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../interfaces";
interface IProductCardProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia>
          <Box
            component={"img"}
            src={product?.Image[2].url}
            width={"300px"}
          ></Box>
        </CardMedia>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4">{product.model_name}</Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            {product.__v}
          </Typography>
          <Box>
            <Typography variant="h6">{product.location}</Typography>
            <Typography variant="h6">{product.status}</Typography>
            <Typography variant="h6">{product.phone_number}</Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
export default ProductCard;
