import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function Active() {
  return (
    <div>
      <h1>active</h1>
      <NavLink to={"/"}>
        <Button variant="contained">go to home page</Button>
      </NavLink>
    </div>
  );
}

export default Active;
