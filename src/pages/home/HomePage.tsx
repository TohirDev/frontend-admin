import Navbar from "../../components/Navbar";
import { getUserToken } from "../../global";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const data = getUserToken();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <h1>hieee</h1>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/login")}
      >
        {data ? "Profil" : "E'lon berish"}
      </Button>
    </div>
  );
};

export default HomePage;
