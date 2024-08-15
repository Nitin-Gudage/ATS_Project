import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Card, Stack, Step, StepLabel, Stepper } from "@mui/material";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import WestSharpIcon from "@mui/icons-material/WestSharp";
import Technical1 from "./Technical1";
import Technical2 from "./Technical2";
import Functional from "./Functional";
import Soft from "./Soft";

const steps = ["Technical Skills", "Functional Skills", "Soft Skills"];

const Skills = ({ stepChange }) => {
  const [next, setNext] = React.useState(false);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (!next) {
      setNext(true);
    } else if (activeStep === 2) {
      stepChange(3);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (next) {
      setNext(false);
    } else if (activeStep <= 0) {
      setActiveStep(1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        height: "calc(100% - 5px)",
        overflowY: "auto",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: 0,
          background: "transparent",
        },
      }}
    >
      <Box>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        {activeStep === 0 && <>{next ? <Technical2 /> : <Technical1 />}</>}
        {activeStep === 1 && (
          <>
            <Functional />
          </>
        )}
        {activeStep === 2 && (
          <>
            <Soft />
          </>
        )}
      </Box>
      <Stack direction="row" justifyContent={"space-between"} pt={5}>
        <Button
          variant="outlined"
          startIcon={<WestSharpIcon />}
          onClick={handleBack}
        >
          prev
        </Button>
        <Button
          variant="outlined"
          endIcon={<ArrowRightAltSharpIcon />}
          onClick={handleNext}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};
export default Skills;
