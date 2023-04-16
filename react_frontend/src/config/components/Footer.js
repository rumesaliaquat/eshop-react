import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppButton from "./AppButton";

function Footer() {
  return (
    <>
      <Box bgcolor="grey" color="white" mt={25} pt={5} position="relative">
        <Grid container spacing={4} my={5} justifyContent="center" gap={3}>
        <Box
          bgcolor="whitesmoke"
          color="black"
          width="50vw"
          p={4}
          borderRadius={2}
          display="flex"
          justifyContent="space-around"
          position="absolute"
          top={-47}
          right={320}
        >
          <h3>Ready to get started? Talk to us today</h3>
          <AppButton name="Get Started" linkPath="/contact"/>
        </Box>
          <Grid item sm={2}>
            <h4>Tijaraat Ecommerce</h4>
            <p style={{ marginTop: "10px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
              adipisicing elit.
            </p>
          </Grid>

          <Grid item sm={2} display="flex" flexDirection="column" px={4}>
            <h4>Subscribe to get important updates</h4>
            <TextField
              label="Email"
              variant="filled"
              color="primary"
              size="small"
              width="50%"
              // autoComplete
              sx={{ marginY: "12px", bgcolor: "white" }}
            />
            <AppButton name="Subscribe" />
            {/* <Button variant="contained" color="primary">
              Subscribe
            </Button> */}
          </Grid>

          <Grid item sm={2} px={4}>
            <h4>Follow Us</h4>
            <Box display="flex" justifyContent="space-between" py={2}>
              <InstagramIcon
                sx={{
                  border: "1px solid white",
                  borderRadius: 5,
                  p: 0.5,
                  mr: 2,
                }}
              />
              <YouTubeIcon
                sx={{
                  border: "1px solid white",
                  borderRadius: 5,
                  p: 0.5,
                  mr: 2,
                }}
              />
              <TwitterIcon
                sx={{ border: "1px solid white", borderRadius: 5, p: 0.5 }}
              />
            </Box>
          </Grid>

          <Grid item sm={2}>
            <h4>Contact Us</h4>
            <p style={{ marginTop: "10px" }}>+92 3300110045</p>
          </Grid>
        </Grid>
        <hr />
        <Box display="flex" justifyContent="space-evenly" p={1}>
          <h5>
            @{new Date().getFullYear()} TijaraatEcommerce, All Rights Reserved
          </h5>
          <Box>
            <h6>PRIVACY POLICY</h6>
            <h6>TERMS & CONDITIONS</h6>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
