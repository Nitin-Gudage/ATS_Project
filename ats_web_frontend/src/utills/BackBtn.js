import { Button, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Theme from "./Theme";

const BackBtn = () => {
  return (
    <div>
      <ThemeProvider theme={Theme}>
      <Button
        disableTouchRipple
        size="large"
        sx={{color: "common.black" }}
      >
        <KeyboardBackspaceIcon />
       Go Back
      </Button>
      </ThemeProvider>
    </div>
  );
};

export default BackBtn;
