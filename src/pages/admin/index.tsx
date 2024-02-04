import { useEffect } from "react";
import { getUserToken } from "../../global";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Container, Grid } from "@mui/material";

const AdminPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const userToken = getUserToken();
    if (!userToken) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <Container>
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          md={3}
          sm={2}
          sx={{
            borderRight: "1px solid silver",
            borderLeft: "1px solid silver",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "90%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              mt: 5,
            }}
          >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ fontSize: "20px" }}
            >
              E'lonlar
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2, fontSize: "20px" }}
            >
              Sozlamalar
            </Button>
          </Box>
        </Grid>
        <Grid item md={9} sm={10} sx={{ background: "blue" }}>
          {}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminPage;
