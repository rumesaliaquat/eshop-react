import React from "react";
import { Box } from "@mui/material";
import AppButton from "../config/components/AppButton";

function Error() {
  return (
      <Box
        width={600}
        height={300}
        m="40px auto"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="#bdc5d2"
      >
        <h2 style={{ color: "red", margin: "10px", fontFamily: 'cooper', fontSize:'2rem' }}> 404! Page Not Found </h2>
        <AppButton name="Back to Home" linkPath="/" size="medium" />
      </Box>
  );
}

export default Error;


// how to center a div?