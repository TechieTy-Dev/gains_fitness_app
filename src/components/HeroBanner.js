import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import banner from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "100px", xs: "70px" }, ml: { sm: "150px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#fff" fontWeight="600" fontSize="26px">
        Hardcore Gains Gym
      </Typography>
      <Typography
        color="#fff"
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Lift, Eat, Sleep <br /> <span className="text">Repeat</span>
      </Typography>
      <Typography color="#fff" fontSize="22px" lineHeight="35px" mb={3}>
        Check Out some Exercises
      </Typography>
      <Button
        className="nav-link"
        href="#exercises"
        variant="contained"
        color="primary"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#fff"
        sx={{ opacity: 0.05, display: { lg: "block", xs: "none" } }}
        fontSize="300px"
        mt="50px"
      >
        Exercise
      </Typography>
      <img src={banner} alt="hero banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
