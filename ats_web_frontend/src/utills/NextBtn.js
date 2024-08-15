import { Button, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import Theme from "./Theme";

const NextBtn = () => {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Button
          variant="contained"
          disableTouchRipple
          sx={{color: "common.black" }}
        >
          <Typography>Save</Typography>
          <EastOutlinedIcon />
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default NextBtn;
