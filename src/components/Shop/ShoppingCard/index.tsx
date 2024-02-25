//mui
import {
  Box,
  Button,
  Card,

  // CardHeader,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

//mui icons
import { ShoppingCartOutlined } from "@mui/icons-material";

import { IProduct } from "./constants";

//assets
//import imageassets from "../../assets/product-image.jpeg";

//assets
import { checkavailability, instock } from "../../../assets";

// styles
import cardstyles from "./styles";

//props
interface TShoppingCardProps {
  data: IProduct;
}

//component
const ShoppingCard = ({ data }: TShoppingCardProps) => {
  const { status, name, oldprice, price, rating, image } = data;

  const { wrapper, header, content, border } = cardstyles;

  return (
    <Card
      sx={{
        boxShadow: "none",
        userSelect: "none",
        ...wrapper,
        ...border,

        "&:hover": {
          transition: "0.4s",
          md: {
            paddingTop: "15px",
            transition: "0.5s",
            marginTop: "15px",
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,

            boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.14)",

            button: {
              display: "flex",
            },
          },
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "6px", mb: 1 }}>
        <img src={status === "in stock" ? instock : checkavailability} alt="" />
        <Typography sx={{ ...header, ...border }}>{status}</Typography>
      </Box>

      <CardMedia
        component={"img"}
        src={image}
        title={""}
        sx={{ width: "150px", ...border }}
      />

      <Box
        sx={{
          display: "flex",
          gap: "9px",
          alignItems: "center",
          my: 1,
        }}
      >
        <Rating
          //size="small"
          name="read-only"
          value={rating}
          readOnly
          sx={{ fontSize: "14px" }}
        />

        <Typography variant="body2" color="#A2A6B0">
          Reviesws({rating})
        </Typography>
      </Box>

      <Box>
        <Typography sx={content} mb={1.5}>
          {name.length &&
            `${name.substring(0, 60)}${name.length >= 60 ? "..." : ""}`}
        </Typography>

        <Typography
          variant="body2"
          sx={{ textDecorationLine: "line-through", color: "#666666" }}
        >
          ${oldprice}
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: "18px", fontWeight: 600, color: "black" }}
        >
          ${price}
        </Typography>

        <Button
          variant="outlined"
          startIcon={<ShoppingCartOutlined />}
          size="small"
          sx={{
            display: { xs: "flex", md: "none" },
            transition: "0.1s",
            mt: 2,
            mb: "25px",
            border: "2px solid rgb(1, 86, 255)",
            borderRadius: "50px",
            textTransform: "capitalize",
            fontFamily: "Poppins",
            fontSize: "13px",
            fontWeight: 600,
            "&:hover": {
              border: "2px solid rgb(1, 86, 255)",
            },
          }}
        >
          Add To Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ShoppingCard;
