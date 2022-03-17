import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const WhatWeOffer = () => {
  const [weOffers, setWeOffers] = useState([]);
  useEffect(() => {
    fetch("/WEoffer.json")
      .then((res) => res.json())
      .then((data) => {
        setWeOffers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        What We Offer
      </Typography>
      <Grid container spacing={5}>
        {weOffers.map((offer) => (
          <Grid item xs={12} md={4}>
            <Item sx={{ padding: "25px", boxShadow: 20, borderRadius: 3 }}>
              <Grid container spacing={0}>
                <Grid item xs={6} md={4}>
                  <Item id="non-shadow">
                    <CardMedia
                      component="img"
                      image={offer.image}
                      alt="Paella dish"
                      sx={{ width: "100%" }}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6} md={8}>
                  <Item sx={{ textAlign: "start" }} id="non-shadow">
                    <Typography variant="h5">{offer.name}</Typography>
                  </Item>
                </Grid>
              </Grid>
              <Typography sx={{ textAlign: "start" }}>{offer.desc}</Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhatWeOffer;
