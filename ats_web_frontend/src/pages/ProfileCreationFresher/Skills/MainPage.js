import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Stack, Step, StepLabel, Stepper } from "@mui/material";
import ProfileCreation1 from "../Skills/ProfileCreation1";
import ProfileCreation2 from "../Skills/ProfileCreation2";
import ProfileCreation3 from "./ProfileCreation3";
import ProfileCreation4 from "./ProfileCreation4";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const steps = ["Technical Skills", "Functional Skills", "Soft Skills"];

function MainPage({ stepChange }) {
  const [next, setNext] = React.useState(false);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (!next) {
      setNext(true);
    } else if (activeStep === 2) {
      stepChange(1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1); // Decrease the active step by 1
    }
  };

  const handleBack = () => {
    if (next) {
      setNext(false);
    } else if (activeStep >= 0) {
      setActiveStep(0);
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
          {activeStep === 0 && (
            <>{next ? <ProfileCreation2 /> : <ProfileCreation1 />}</>
          )}
          {activeStep === 1 && (
            <>
              <ProfileCreation3></ProfileCreation3>
            </>
          )}
          {activeStep === 2 && (
            <>
              <ProfileCreation4 />
            </>
          )}
        </Box>
      </Box>
      <Stack direction="row" justifyContent={"space-between"} pt={5}>
        <Button
          variant="outlined"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={handleBack}
        >
          prev
        </Button>
        <Button
          variant="outlined"
          endIcon={<ArrowRightAltIcon />}
          onClick={handleNext}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
}
export default MainPage;
