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
import TextField from "@mui/material/TextField";
import { BsCodeSlash } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { Typography } from "@mui/material";
 
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
  ...(ownerState.error && {
    color: "#ff1744",
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
  const { active, completed, icon, error } = props;
  const icons = {
    1: <HiOutlineNewspaper className="icon" />,
    2: <BsCodeSlash className="icon" />,
    3: <BsCodeSlash className="icon" />,
    4: <BsCodeSlash className="icon" />,
    5: <GoPeople className="icon" />,
  };
 
  return (
    <QontoStepIconRoot ownerState={{ active, completed, error }}>
      <div className="QontoStepIcon-circle">{icons[icon]}</div>
    </QontoStepIconRoot>
  );
}
 
QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
  error: PropTypes.bool,
};
 
const steps = [
  { icon: 1, label: "Round 1", content: "Resume Subbmitted" },
  { icon: 2, label: "Round 2", content: "Profile Viewed" },
  { icon: 3, label: "Round 3", content: "Interview 1" },
  { icon: 4, label: "Round 4", content: "Interview 2" },
  { icon: 5, label: "Round 5", content: "Selected" },
];
 
export default function PopupIntHis({ data }) {
  const [activeStep, setStatus] = React.useState(
    data.status == "Pending"
      ? 0
      : data.status == "Pending"
      ? 1
      : data.status == "Viewed"
      ? 2
      : data.status == "Not Selected"
      ? 3
      : 4
  );
 
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((step, index) => (
          <Step >
            <StepLabel
              StepIconComponent={(props) => (
                <QontoStepIcon
                  {...props}
                  icon={step.icon}
                  error={activeStep === 3 && index === 3}
                />
              )}
              error={activeStep === 3 && index === 3}
            >
              <Typography>{step.label}</Typography>
              <Typography sx={activeStep===4?{color:'green'}:""}>{activeStep===3?'Not Selected':step.content}</Typography>
              </StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 3 && (
        <TextField
          label="Reason for rejection"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      )}
      {activeStep === 4 && (
        <Typography> You ARE SELECTED</Typography>
      )}
    </Stack>
  );
}
 