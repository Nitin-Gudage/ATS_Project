import { Button, Stack } from "@mui/material";
import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import OrganizationalProjects from "./OrganizationalProjects";
import PersonalProjects from './PersonalProjects'
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import WestSharpIcon from "@mui/icons-material/WestSharp";

const ProjectsFresher = ({ stepChange }) => {
  const [next, setNext] = React.useState(false);
  const handleNext=()=>{
if(!next)
  {setNext(true)}
else{
  stepChange(4)
}
  }
  const handlePrev=()=>{
    if(next)
      {setNext(false)}
    else{
      stepChange(2)
    }
  }
  return (
    <>
      {next ? <OrganizationalProjects /> : <PersonalProjects />}
      <Stack direction="row" justifyContent={"space-between"} pb={2}>
        <Button
          variant="outlined"
          startIcon={<WestSharpIcon />}
          onClick={ handlePrev}
        >
          prev
        </Button>
        <Button
          variant="outlined"
          endIcon={<ArrowRightAltSharpIcon />}
          onClick={ handleNext}
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

export default ProjectsFresher;
