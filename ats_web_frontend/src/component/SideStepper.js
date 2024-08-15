import React from "react";
import {
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
} from "@mui/material";

const SideStepper = ({ stepValue, steps }) => {
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <Box sx={{ maxWidth: 400, height: "100%" }}>
      <Stepper activeStep={stepValue || 0} orientation={!isTablet ? "horizontal" : "vertical"}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default SideStepper;
