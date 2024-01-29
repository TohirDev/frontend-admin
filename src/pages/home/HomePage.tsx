import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Navbar from "../../components/Navbar";
import { getUserToken } from "../../global";

const HomePage = () => {
  const data = getUserToken();
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%" }}>
      <Navbar />
      <h1>hieee</h1>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/login")}
      >
        {data ? "Profil" : "E'lon berish"}
      </Button>
    </Box>
  );
};

export default HomePage;
