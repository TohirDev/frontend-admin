import { useEffect } from "react";
import { getUserToken } from "../../global";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import SideNav from "./components/sidebar";

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
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h1">AdminPage</Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare
          suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
          volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
          Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
          ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
          aliquam sem et tortor. Habitant morbi tristique senectus et.
          Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
          aenean euismod elementum nisi quis eleifend. Commodo viverra
          maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
          aliquam ultrices sagittis orci a.
        </Typography>
        <NavLink to="/">
          <Button variant="contained">Go to Home Page</Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default AdminPage;
