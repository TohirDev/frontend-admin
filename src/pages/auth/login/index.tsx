import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import LOGIN from "../../../assets/logo-svg.svg";

const LoginPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "grid", placeItems: "center", height: "100vh" }}
    >
      <Card
        sx={{
          width: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Typography variant="h3">Tizimga kirish</Typography>
          <Box
            component={"img"}
            src={LOGIN}
            sx={{ width: "300px", height: "300px", objectFit: "contain" }}
          />
          <Typography variant="h5">Telefon raqam</Typography>
          <TextField />
          <Button variant="contained">Tizimga kirish</Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginPage;
