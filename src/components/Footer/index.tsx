import {
  Button,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Box,
} from "@mui/material";
import {
  FooterWrapper,
  FooterHeader,
  FooterBody,
  FooterBodyNavLink,
} from "./styled";
import { ExpandMore } from "@mui/icons-material";
import { FOOTER_NAV } from "./constants";

import useResponsive from "../../hooks/useResponsive";

const Footer = () => {
  const isDesktop = useResponsive("up", "md", "xl");
  return (
    <FooterWrapper>
      <Container maxWidth="xl">
        <FooterHeader>
          <div>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontSize: "38px",
                fontWeight: "500",
                color: "white",
              }}
              gutterBottom
            >
              Sign Up To Our Newsletter
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 300,
                color: "white",
              }}
            >
              Be the first to hear about the latest offers.
            </Typography>
          </div>

          <Button
            variant="contained"
            color="primary"
            sx={{
              ml: "auto",
              width: "151px",
              height: "50px",
              textTransform: "capitalize",
              borderRadius: "50px",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Subscribe
          </Button>
        </FooterHeader>

        <FooterBody container>
          {!!FOOTER_NAV.length &&
            FOOTER_NAV.map((footerbodyitem, bodyitemindex, bodyarray) => (
              <Grid item xs={12} md={2.4} key={bodyitemindex}>
                <Accordion
                  defaultExpanded={isDesktop}
                  sx={{
                    borderBottom: {
                      xs: "1px solid white",
                      md: "none",
                    },
                  }}
                  disabled={isDesktop}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMore sx={{ color: { xs: "#FFF", md: "#000" } }} />
                    }
                    aria-label="Expand"
                    aria-controls="-content"
                    id="-header"
                    sx={{ bgcolor: "#000", color: "#FFF", p: 0 }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,

                        color: {
                          xs: "rgb(229, 236, 241)",
                          md: "rgba(255, 255, 255, 0.5)",
                        },
                      }}
                    >
                      {footerbodyitem.label}
                    </Typography>
                  </AccordionSummary>

                  {footerbodyitem.links?.map((link, linkindex) => (
                    <AccordionDetails
                      key={linkindex}
                      sx={{ bgcolor: "#000", padding: "8px 10px 10px 0px" }}
                    >
                      {bodyitemindex === bodyarray.length - 1 ? (
                        linkindex === 1 || linkindex === 5 ? (
                          <FooterBodyNavLink href="">
                            {link.substring(0, 7)}
                            <Box
                              component={"span"}
                              sx={{ color: "rgb(1, 164, 255)" }}
                            >
                              {link.slice(7)}
                            </Box>
                          </FooterBodyNavLink>
                        ) : (
                          <FooterBodyNavLink href="">{link}</FooterBodyNavLink>
                        )
                      ) : (
                        <FooterBodyNavLink href="">{link}</FooterBodyNavLink>
                      )}
                    </AccordionDetails>
                  ))}
                </Accordion>
              </Grid>
            ))}
        </FooterBody>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
