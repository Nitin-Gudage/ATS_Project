import { Button, ThemeProvider } from "@mui/material";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Theme from "./Theme";

const SaveBtn = ({onClick}) => {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Button
          variant="contained"
          size="large"
          component="h2"
          onClick={onClick}
          endIcon={<HiArrowLongRight />}
        >
          Save
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default SaveBtn;
