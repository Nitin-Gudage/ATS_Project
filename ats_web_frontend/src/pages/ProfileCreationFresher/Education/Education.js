import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Graduation from "./Graduation";
import College from "./College";
import Completed from "./Completed";
import Theme from "../../../utills/Theme";
const Education = ({ stepChange }) => {
  const [pages, setPages] = useState(0);
  const handleNextStepChange = () => {
    if (pages == 3) {
      stepChange(4);
    } else {
      setPages(pages + 1);
    }
  };
  const handlePrevStepChange = () => {
    if (pages == 0) {
      stepChange(3);
    } else {
      setPages(pages - 1);
    }
  };

  return (
    <>
      {pages === 0 && <Graduation />}
      {pages === 1 && <College />}
      {pages === 2 && <Completed />}

      <Stack direction="row" justifyContent="space-between">
        <Button
          label="Back"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={handlePrevStepChange}
        >
          Back
        </Button>
        <Button 
          variant="outlined"
          endIcon={<EastOutlinedIcon />}
          onClick={handleNextStepChange}
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

export default Education;
