import { Box, Button, Container, Grid, Typography } from "@mui/material";
import MAC from "../../assets/mac1.png";
import CCarousel from "../../components/ui/CCarousel";

const HomePage = () => {
  return (
    <>
      <Box sx={{ width: "100%", background: "#72A0C1", py: 2 }}>
        <CCarousel />
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item sm={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Roboto",
                  width: "100%",
                  textTransform: "capitalize",
                  color: "#fff",
                  fontWeight: "900",
                  lineHeight: "90px",
                }}
              >
                toza laptoplarni xarid qiling{" "}
                <Typography
                  component="span"
                  variant="h2"
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    color: "#000",
                    fontWeight: "900",
                    py: 0.3,
                    px: 2,
                  }}
                >
                  yoki soting
                </Typography>
              </Typography>
              <Typography
                component="p"
                sx={{ mt: 5, fontSize: "25px", color: "#fff" }}
              >
                O'zbekistonda birinchi raqamli laptoplar oldi-sotdi tizimi
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 10 }}>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "20px",
                    background: "#3457D5",
                    color: "#000",
                    "&:hover": {
                      background: "white",
                    },
                  }}
                >
                  Sotib oling
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "20px",
                    background: "#002244",
                    ml: 4,
                    color: "#fff",
                    "&:hover": {
                      background: "#1F305E",
                    },
                  }}
                >
                  E'lon bering
                </Button>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box component="img" src={MAC} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
