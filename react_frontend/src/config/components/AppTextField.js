import React from "react";
import TextField from "@mui/material/TextField";

function AppTextField({label, name}) {
  return (
    <>
      <TextField id="outlined-basic" label={label} name={name} variant="outlined"  required/>
    </>
  );
}

export default AppTextField;
