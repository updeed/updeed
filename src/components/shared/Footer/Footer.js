import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Footer.css";
import footerLogo from "../../../images/updeed.png";
import contactIcon from "../../../images/icons/contact-icon.png";
import locationIcon from "../../../images/icons/location-icon.png";
import facebookIcon from "../../../images/icons/facebook.png";
import googlePlusIcon from "../../../images/icons/google-plus.png";
import linkedinIcon from "../../../images/icons/linkedin.png";
import twitterIcon from "../../../images/icons/twitter.png";

const Footer = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#323B43", padding: "50px 0" }}>
        <Container>
          <Box>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{
                    width: "60px",
                    borderRadius: "25px 22px",
                    marginRight: "20px",
                  }}
                  src={footerLogo}
                  alt=""
                />
                <Typography
                  variant="h5"
                  sx={{ color: "#ff7426", fontWeight: "600" }}
                >
                  UPdeed
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{ width: "30px", color: "white", marginRight: "10px" }}
                  src={contactIcon}
                  alt=""
                />
                <Box>
                  <Typography variant="body1" color={"whitesmoke"}>
                    +880 1555 000 000
                  </Typography>
                  <Typography variant="body1" color={"whitesmoke"}>
                    info@updeed.com
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{ width: "40px", color: "white", marginRight: "10px" }}
                  src={locationIcon}
                  alt=""
                />
                <Typography variant="body1" color={"whitesmoke"}>
                  Rangpur, Rangpur, Bangladesh
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <hr style={{ border: "1px solid gray", margin: "20px 0 40px" }} />
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={5}>
                <Typography
                  sx={{
                    color: "whitesmoke",
                    fontWeight: "600",
                    marginBottom: "20px",
                  }}
                  variant="h6"
                >
                  About
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginRight: "50%",
                    textAlign: "justify",
                    color: "gainsboro",
                  }}
                >
                  Ewebot have much planned for the future, working with great
                  clients and continued software development.
                </Typography>
                <div className="footer-icon">
                  <a href="">
                    <img src={facebookIcon} alt="Facebook Icon" />
                  </a>
                  <a href="">
                    <img src={twitterIcon} alt="Twitter Icon" />
                  </a>
                  <a href="">
                    <img src={googlePlusIcon} alt="Google Plus Icon" />
                  </a>
                  <a href="">
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} md={2}>
                <Typography
                  sx={{
                    color: "whitesmoke",
                    fontWeight: "600",
                    marginBottom: "20px",
                  }}
                  variant="h6"
                >
                  Services
                </Typography>
                <Box>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      Digital Marketing
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      SEO Services
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      Web Development
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      Web Design
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      Lead Generation
                    </a>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <Typography
                  sx={{
                    color: "whitesmoke",
                    fontWeight: "600",
                    marginBottom: "20px",
                  }}
                  variant="h6"
                >
                  Community
                </Typography>
                <Box>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      Our Product
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      Documentation
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      Our Services
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      Company
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      What We Do?
                    </a>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <Typography
                  sx={{
                    color: "whitesmoke",
                    fontWeight: "600",
                    marginBottom: "20px",
                  }}
                  variant="h6"
                >
                  Quick Links
                </Typography>
                <Box>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      Home
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      About Us
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      Main Services
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      Pricing
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "5px 0" }}>
                    <a className="footer-item" href="">
                      Our Cases
                    </a>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box></Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#2D363D", textAlign: "center" }}>
        <Typography
          sx={{ color: "#696687", padding: "20px 0" }}
          variant="body2"
        >
          Copy Wright © 2022 updeed.com
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
