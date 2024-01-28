import { useEffect } from "react";
import { getUserToken, removeToken } from "../../global";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AdminPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userToken = getUserToken();
    if (!userToken) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <h1>ADMIN PANEL</h1>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          removeToken();
          navigate("/login");
        }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default AdminPage;
