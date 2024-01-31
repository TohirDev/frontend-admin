import { useNavigate } from "react-router-dom";
import { Laptop, Login } from "@mui/icons-material";
import { AppBar, Button } from "@mui/material";
import { SToolbar, SLogo, SUserBox } from "./styled.ts";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#f1f1f1", color: "black" }}>
      <SToolbar>
        <SLogo onClick={() => navigate("/")}>
          <Laptop />
          Laptop.uz
        </SLogo>
        <SUserBox>
          <Button
            variant="contained"
            startIcon={<Login />}
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/login")}
          >
            Tizimga kirish
          </Button>
        </SUserBox>
      </SToolbar>
    </AppBar>
  );
};

export default Navbar;
