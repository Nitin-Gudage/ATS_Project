import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import College from "./College";
import School from "./School";
import Completed from "../../ProfileCreationFresher/Education/Completed";
const Education = ({ stepChange }) => {
  const [next, setNext] = React.useState(0);

  const handleNext = () => {
    if (next === 2) {
      stepChange(5);
    } else {
      setNext(next+1);
    }
  };

  const handleBack = () => {
    if (next === 0) {
      stepChange(3);
    } else {
      setNext(next-1);
    }
  };

  return (
    <>
      <Stack justifyContent='center' width='100%' height="100%" >
        {next === 0 && <College handleBack={handleBack} handleNext={handleNext}/>}
        {next === 1 && <School handleBack={handleBack} handleNext={handleNext}/>}
        {next === 2 && <Completed handleBack={handleBack} handleNext={handleNext}/>}
      </Stack>
      
    </>
  );
};

export default Education;
