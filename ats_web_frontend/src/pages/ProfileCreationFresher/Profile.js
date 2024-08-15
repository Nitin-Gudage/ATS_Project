import { Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import SideStepper from "../../component/SideStepper";
import MainPage from "./Skills/MainPage";
import Training from "./Training";
import InternShip from "./InternShip";
import Projects from "./Projects/ProjectsFresher";
import Education from "./Education/Education";

const steps = [
  {
    label: "Skills",
  },
  {
    label: "Trainings & Certification",
  },
  {
    label: "Internships",
  },
  {
    label: "Projects",
  },
  {
    label: "Education",
  },
];

const Profile = () => {
  const [stepValue, setStepValue] = useState(0);

  const handleDataChange = (newData) => {
    setStepValue(newData);
    console.log(newData);
  };

  return (
    <>
      <Grid container spacing={3} >
        <Grid item lg={10}>
          <Card variant="outlined">
            <CardContent
               sx={{
                display: "flex",
                height: "78vh",
                padding:5,
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              {stepValue == 0 && <MainPage stepChange={handleDataChange} />}
              {stepValue == 1 && <Training stepChange={handleDataChange} />}
              {stepValue == 2 && <InternShip stepChange={handleDataChange} />}
              {stepValue == 3 && <Projects stepChange={handleDataChange} />}
              {stepValue == 4 && <Education stepChange={handleDataChange} />}
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={2}>
          <Card variant="outlined"
          sx={{
            display: {
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
              height: "78vh",
            },
          }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <SideStepper stepValue={stepValue} steps={steps} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
