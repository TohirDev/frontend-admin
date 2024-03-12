import { Box, Container, Typography } from "@mui/material";
import { socialnews } from "../../../../assets";
import useResponsive from "../../../../hooks/useResponsive";
import { DragToScroll } from "../../../../components";

const SocialNews = () => {
  const isMobil = useResponsive("between", "xs", "sm");
  return (
    <Container maxWidth="xl" sx={{ my: { xs: 1, sm: 4 } }}>
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
      {isMobil ? (
        <Box sx={{ borderBottom: "1px solid #ddd", pb: "30px" }}>
          <DragToScroll>
            {socialnews &&
              socialnews.map((path, i) => (
                <Box
                  key={i}
                  sx={{
                    width: "235px",
                    mr: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "225px",
                    }}
                  >
                    <img src={path} alt="" style={{ width: "100%" }} />
                  </Box>

                  <Box
                    sx={{
                      padding: {
                        xs: "10px 0px 5px 0px",
                        sm: "10px 25px 10px 25px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: { xs: "none", sm: "center" },
                        color: "black",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        fontWeight: 400,
                      }}
                    >
                      If you’ve recently made a desktop PC or laptop purchase,
                      you might want to consider adding peripherals to enhance
                      your home office setup, your gaming rig, or your business
                      workspace...
                    </Typography>
                  </Box>
                </Box>
              ))}
          </DragToScroll>
        </Box>
      ) : (
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
                    might want to consider adding peripherals to enhance your
                    home office setup, your gaming rig, or your business
                    workspace...
                  </Typography>
                </Box>
              </Box>
            ))}
        </Box>
      )}
    </Container>
  );
};

export default SocialNews;
