import { useState, MouseEvent } from "react";

//mui
import { Box, Button, Popover, Typography } from "@mui/material";

//mui icons
import {
  AccessTime,
  FmdGoodOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";

//component
function WorkingHours() {
  //state
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button
        onClick={(e) => handleClick(e)}
        aria-describedby={id}
        endIcon={<KeyboardArrowDown />}
        variant="text"
        sx={{
          padding: 0,
          fontWeight: "600",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          fontSize: { xs: 10, sm: 11, md: 12 },
        }}
      >
        <Box component={"span"} color={"#ACACAC"} mr={"3px"}>
          Mon-Thu:
        </Box>
        9:00 AM - 5:30 PM
      </Button>

      <Popover
        sx={{
          boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.14)",
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            borderBottom: "1px solid #CACDD8",
            display: "flex",
            gap: "5px",
            padding: "10px",
          }}
        >
          <AccessTime sx={{ color: "#0156FF" }} />
          <Box>
            <Typography
              variant="caption"
              color="black"
              fontSize={"13px"}
              fontFamily={"Poppins, sans-serif"}
            >
              We are open:
            </Typography>

            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <Box component={"span"} color={"#ACACAC"} mr={"3px"}>
                Mon-Thu:
              </Box>
              9:00 AM - 5:30 PM
            </Typography>

            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <Box component={"span"} color={"#ACACAC"} mr={"3px"}>
                Fr:
              </Box>
              9:00 AM - 6:00 PM
            </Typography>

            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <Box component={"span"} color={"#ACACAC"} mr={"3px"}>
                Sat:
              </Box>
              11:00 AM - 5:00 PM
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderBottom: "1px solid #CACDD8",
            display: "flex",
            gap: "5px",
            padding: "10px",
          }}
        >
          <FmdGoodOutlined sx={{ color: "#0156FF" }} />
          <Box>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Address: 1234 Street Adress, <br /> City Address, 1234
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            padding: "10px 5px 0px 20px",

            fontSize: "13px",
            fontWeight: 400,
            fontFamily: "Poppins, sans-serif",
            color: "black",
          }}
        >
          Phones:
          <Box component={"span"} color={"#0156FF"} ml={0.5}>
            (00) 1234 5678
          </Box>
        </Typography>
        <Typography
          sx={{
            padding: "6px 5px 15px 20px",
            fontSize: "13px",
            fontWeight: 400,
            fontFamily: "Poppins, sans-serif",
            color: "black",
          }}
        >
          E-mail:
          <Box component={"span"} color={"#0156FF"} ml={0.5}>
            shop@email.com
          </Box>
        </Typography>
      </Popover>
    </>
  );
}

export default WorkingHours;
