import React from "react";
import "./OurTeam.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import blank_img from "../../../images/team-img/blank-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const OurTeam = () => {
  return (
    <Container sx={{ margin: "50px auto", textAlign: "center" }}>
      <Box>
        <Typography
          variant="body2"
          sx={{ fontWeight: "600", color: "#3b3663" }}
        >
          Our Team
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: "600", color: "#3b3663", margin: "10px 0" }}
        >
          Our Professionals
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "500",
            margin: "0 auto",
            width: "50%",
            color: "#696687",
          }}
        >
          Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case
          regione signiferumque vim te.
        </Typography>
      </Box>
      <Box sx={{ margin: "50px 0" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <img
              src={blank_img}
              alt=""
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <Box sx={{ mt: -8, mb: 5 }} className="icon-section">
              <a href="" target="blank">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="" target="blank">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </a>
              <a href="" target="blank">
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </a>
            </Box>
            <Box sx={{ marginTop: "13px" }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", color: "#3b3663" }}
              >
                Employer Name
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "600", color: "#696687" }}
              >
                Job Title
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img
              src={blank_img}
              alt=""
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <Box sx={{ mt: -8, mb: 5 }} className="icon-section">
              <a href="" target="blank">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="" target="blank">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </a>
              <a href="" target="blank">
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </a>
            </Box>
            <Box sx={{ marginTop: "13px" }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", color: "#3b3663" }}
              >
                Employer Name
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "600", color: "#696687" }}
              >
                Job Title
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img
              src={blank_img}
              alt=""
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <Box sx={{ mt: -8, mb: 5 }} className="icon-section">
              <a href="" target="blank">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="" target="blank">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </a>
              <a href="" target="blank">
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </a>
            </Box>
            <Box sx={{ marginTop: "13px" }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", color: "#3b3663" }}
              >
                Employer Name
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "600", color: "#696687" }}
              >
                Job Title
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img
              src={blank_img}
              alt=""
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <Box sx={{ mt: -8, mb: 5 }} className="icon-section">
              <a href="" target="blank">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="" target="blank">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </a>
              <a href="" target="blank">
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </a>
            </Box>
            <Box sx={{ marginTop: "13px" }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", color: "#3b3663" }}
              >
                Employer Name
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "600", color: "#696687" }}
              >
                Job Title
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Button className="view-more-btn">View More</Button>
    </Container>
  );
};

export default OurTeam;
