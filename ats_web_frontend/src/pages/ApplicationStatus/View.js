import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { LuSearchCode } from "react-icons/lu";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaPersonChalkboard } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Box, TextField, Typography } from "@mui/material";
 
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 30px)",
    right: "calc(50% + 30px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#0071D4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#0071D4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#D9D9D9",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));
 
const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#b4b4b4",
  display: "flex",
  height: 22,
  alignItems: "center",
  justifyContent: "center",
  ...(ownerState.active && {
    color: "#0071D4",
  }),
  ...(ownerState.completed && {
    color: "#0071D4",
  }),
  "& .QontoStepIcon-circle": {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "#F4F4F4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .icon": {
    fontSize: 24,
  },
}));
 
function QontoStepIcon(props) {
  const { active, completed, icon } = props;
  const icons = {
    1: <HiOutlineNewspaper className="icon" />,
    2: <LuSearchCode className="icon" />,
    3: <IoCheckmarkDone className="icon" />,
    4: <FaPersonChalkboard className="icon" />,
  };
 
  return (
    <QontoStepIconRoot ownerState={{ active, completed }}>
      <div className="QontoStepIcon-circle">{icons[icon]}</div>
    </QontoStepIconRoot>
  );
}
 
QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};
 
const steps = [
  { icon: 1, label: "Submitted" },
  { icon: 2, label: "Viewed" },
  { icon: 3, label: "Shortlisted" },
  { icon: 4, label: "Interview Schedule" },
];
export default function View({ selectedItem }) {
  const [activeStep, setActiveStep] = React.useState(
    selectedItem.status === "Pending"
      ? 0
      : selectedItem.status === "Viewed"
      ? 1
      : selectedItem.status === "Not Selected" ||
        selectedItem.status == "Shortlisted"
      ? 2
      : 3
  );
 
  console.log(activeStep);
 
  const renderStepContent = (index) => {
    switch (index) {
      case 0:
        return (
          <>
            <Typography color="common.grey">{selectedItem.Date}</Typography>
          </>
        );
      case 1:
        return (
          <>
            <Typography color="common.grey">{selectedItem.Date}</Typography>
          </>
        );
      case 2:
        return (
          <>
            {selectedItem.status == "Not Selected" ? (
              <Typography color="error">Not Selected</Typography>
            ) : selectedItem.status == "Shortlisted" ? (
              <Typography color="green">shortlisted</Typography>
            ) : (
              <Typography color="green">shortlisted</Typography>
            )}
          </>
        );
      case 3:
        return (
          <>{activeStep === 3 && <Link to="/">Get Interview Link</Link>}</>
        );
      default:
        return null;
    }
  };
 
  return (
    <Stack sx={{ width: "100%" }} spacing={4} py={5}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((step, index) => (
          <Step key={step.label} completed={index < activeStep}>
            <StepLabel
              StepIconComponent={(props) => (
                <QontoStepIcon {...props} icon={step.icon} />
              )}
            >
              {step.label}
              {(index <= activeStep || index === activeStep - 1) && (
                <Box pt={3}>{renderStepContent(index)}</Box>
              )}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {selectedItem.status === "Not Selected" && (
        <Box>
          <Typography pb={3}>
            Regret to inform you that your application is not align with our
            requirements. Here is your feedback from the recruiter go through it
            and come back stronger
          </Typography>
          <TextField fullWidth label="Feedback" multiline minRows={4} />
        </Box>
      )}
    </Stack>
  );
}
 
