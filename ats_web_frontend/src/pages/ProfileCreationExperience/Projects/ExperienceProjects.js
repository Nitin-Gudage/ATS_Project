import { Button, Stack } from "@mui/material";
import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import WestSharpIcon from "@mui/icons-material/WestSharp";
import ExpOrgProjects from "./ExpOrgProjects";
import ExpPersonalProjects from "./ExpPersonalProjects";

const ExperienceProjects = ({ stepChange }) => {
  const [next, setNext] = React.useState(false);

  const handleNext = () => {
    if (next === true) {
      stepChange(5);
    } else {
      setNext(true);
    }
  };

  const handleBack = () => {
    if (next === false) {
      stepChange(3);
    } else {
      setNext(false);
    }
  };

  return (
    <>
      {next ? (
        <ExpOrgProjects handleBack={handleBack} handleNext={handleNext} />
      ) : (
        <ExpPersonalProjects handleNext={handleNext} handleBack={handleBack} />
      )}
    </>
  );
};

export default ExperienceProjects;
