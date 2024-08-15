import { Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import SideStepper from "../../component/SideStepper";
import Sector from "./Sector";
import Industry from "./Industry";
import Skills from "./Skills/Skills";
import ProfessionalExperience from "./ProfessionalExperience";
import ExperienceProjects from "./Projects/ExperienceProjects";
import Education from "./Education/Education";

const steps = [
  {
    label: "Sector",
  },
  {
    label: "industry",
  },
  {
    label: "Skills",
  },
  {
    label: "Professional Experience",
  },
  {
    label: "Projects",
  },
  {
    label: "Education",
  },
];

const ProfileExperience = () => {
  const [stepValue, setStepValue] = useState(0);

  const handleDataChange = (newData) => {
    setStepValue(newData);
    console.log(newData);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={10} md={9} sm={12} xs={12}>
          <Card variant="outlined" >
            <CardContent 
              sx={{
                height: "82vh",
                display: "flex",
                height: "78vh",
                padding:5,
                flexDirection: "column",
                justifyContent: "space-between",
                p: 2,
                boxSizing: "border-box",
                overflowY: "auto",
                overflowX: "hidden",
                "&::-webkit-scrollbar": {
                  width: 0,
                  background: "transparent",
                },
              }}
            >
              {stepValue == 0 && <Sector stepChange={handleDataChange} />}
              {stepValue == 1 && <Industry stepChange={handleDataChange} />}
              {stepValue == 2 && <Skills stepChange={handleDataChange} />}
              {stepValue == 3 && (
                <ProfessionalExperience stepChange={handleDataChange} />
              )}
              {stepValue == 4 && (
                <ExperienceProjects stepChange={handleDataChange} />
              )}
              {stepValue == 5 && <Education stepChange={handleDataChange} />}
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={2} md={3}>
          <Card
            variant="outlined"
            sx={{
              display: {
                lg: "block",
                md: "block",
                sm: "none",
                xs: "none",
                height: "78vh",
              },
            }}
          >
            <CardContent>
              <SideStepper stepValue={stepValue} steps={steps} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileExperience;
