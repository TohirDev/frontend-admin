import {
  Box,
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

const HomePage = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", background: "skyblue" }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6}>
              <Typography variant="h1" sx={{ fontFamily: "Roboto" }}>
                toza laptoplarni xarid qiling{" "}
                <Typography component="span" variant="h1">
                  yoki soting
                </Typography>
              </Typography>
              <Typography component="p">
                O'zbekistonda birinchi raqamli laptoplar oldi-sotdi tizimi
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button>Sotib oling</Button>
                <Button>E'lon bering</Button>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}></Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
