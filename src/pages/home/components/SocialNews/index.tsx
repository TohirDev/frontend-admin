import { Box, Container, Typography } from "@mui/material";
import { socialnews } from "../../../../assets";

const SocialNews = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 6 }}>
      <Typography
        sx={{
          color: "black",
          fontFamily: "Poppins",
          fontSize: "22px",
          fontWeight: 600,
          mb: "21px",
        }}
      >
        Follow us on Instagram for News, Offers & More
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        {socialnews &&
          socialnews.map((path, i) => (
            <Box
              key={i}
              sx={{
                width: "235px",
              }}
            >
              <Box
                sx={{
                  width: "225px",
                }}
              >
                <img src={path} alt="" style={{ width: "100%" }} />
              </Box>

              <Box sx={{ padding: "10px 25px 10px 25px" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "black",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    fontWeight: 400,
                  }}
                >
                  If you’ve recently made a desktop PC or laptop purchase, you
                  might want to consider adding peripherals to enhance your home
                  office setup, your gaming rig, or your business workspace...
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>
    </Container>
  );
};

export default SocialNews;
