/* eslint-disable jsx-a11y/alt-text */
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Trusted() {
  return (
    <Box bgcolor="#eceff1" p={5} m={0} boxSizing="border-box">
      {/* <Grid item xs={12} textAlign='center'> */}
      <Typography variant="h6" align="center" fontWeight="bold" m={4}>
        Trusted By 1000+ Companies
      </Typography>
      {/* </Grid> */}
      <Grid container display="flex" justifyContent="center">
        <Grid item xs={12} sm={12} md={2} textAlign="center">
          <img src="../../../images/trustedBrand.png" width="120px" />
        </Grid>
        <Grid item xs={12} md={2} textAlign="center">
          <img src="../../../images/trustedBrand.png" width="120px" />
        </Grid>
        <Grid item xs={12} md={2} textAlign="center">
          <img src="../../../images/trustedBrand.png" width="120px" />
        </Grid>
        <Grid item xs={12} md={2} textAlign="center">
          <img src="../../../images/trustedBrand.png" width="120px" />
        </Grid>
        <Grid item xs={12} md={2} textAlign="center">
          <img src="../../../images/trustedBrand.png" width="120px" />
        </Grid>
      </Grid>
    </Box>
  );
}
export default Trusted;
