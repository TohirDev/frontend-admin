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
          flexDirection: "column",
        }}
      >
        <CardMedia>
          <Box
            component={"img"}
            src={product?.Image[2].url}
            width={"100%"}
          ></Box>
        </CardMedia>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", p: "none" }}
        >
          <Typography variant="h5">{product.model_name}</Typography>
          <Typography variant="body1" fontWeight={"bold"}>
            {product.__v} $
          </Typography>

          <Typography variant="body1">Status {product.status}</Typography>
          <Typography variant="body1">Location {product.location}</Typography>

          <Typography variant="body1">
            Telephone {product.phone_number}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
export default ProductCard;
