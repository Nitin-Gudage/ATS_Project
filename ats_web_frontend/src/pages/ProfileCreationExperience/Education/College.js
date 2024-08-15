import React, { useState } from "react";
import {
  Box,
  ThemeProvider,
  Card,
  Typography,
  CardContent,
  Button,
  Dialog,
  Stack,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";
import Slider from "@mui/material/Slider";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import WestSharpIcon from "@mui/icons-material/WestSharp";
// import Theme from "../../utills/Theme";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Theme from "../../../utills/Theme";
import CustomChip from "../../../utills/CustomChip";
const AwardsSection = ({ awards }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
   <Box >
     <Box
      sx={{
        height: "78vh",
        boxSizing: "border-box",
        maxHeight: "calc(100% - 5px)",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: 0,
          background: "transparent",
        },
      }}
    >
      <Typography color="#818181" sx={{ display: "inline-block" }}>
        {awards}
      </Typography>
      {awards.length > 5 && (
        <>
          <Typography onClick={handleOpen} variant="p4" color="#0071D4">
            See more
          </Typography>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Awards</DialogTitle>
            <DialogContent>
              <Typography>{awards}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Box>
   </Box>
  );
};
const College = ({ handleNext, handleBack }) => {
  const sourceIndustry = ["Graduate", "Post Graduate", "Diploma"];

  const [DeptChip, setDeptChip] = React.useState(null);
  const [AnotherDeptChip, setAnotherDeptChip] = React.useState(null);
  const [selectedChip, setSelectedChip] = useState(null);
  const [formData, setFormData] = useState({});
  const [dialogFormData, setDialogFormData] = useState({});
  const [currentEdu, setcurrentEdu] = useState(null);
  const [prevEdu, setprevEdu] = useState(null);

  const [openPopup, setOpenPopup] = useState(false);
  const handleInputChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleDialogInputChange = (fieldName, value) => {
    setDialogFormData((prevDialogFormData) => ({
      ...prevDialogFormData,
      [fieldName]: value,
    }));
  };
  const handleSubmitCurrent = () => {
    setcurrentEdu({ ...formData, ...dialogFormData });
    console.log(currentEdu);
  };
  const handleSubmitPrev = () => {
    setprevEdu({ ...formData, ...dialogFormData });
    setOpenPopup(false);
  };

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setDialogFormData({});
    setOpenPopup(false);
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Box
          gap={5}
          sx={{
            height: "78vh",
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
            <Stack direction="row" alignItems="center" spacing={3} pb={4}>
              <Typography color={"common.blue"} variant="h5">
                College Education{" "}
              </Typography>
              <Divider width="10%" sx={{ borderWidth: "1px" }} />
              <Typography variant="h5">School Education</Typography>
            </Stack>
            <Box pb={2}>
              <Typography
                variant="h5"
                pb={3}
                sx={{
                  fontSize: "16px",
                  color: "#000000",
                  fontWeight: 600,
                  fontFamily: "Poppins",
                }}
              >
                What soft skills have you mastered?
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={2} pb={4}>
                {sourceIndustry.map((item) => (
                   <CustomChip
                   label={item}
                   onClick={() => setDeptChip(item)}
                   status={item === DeptChip}
                 />
                ))}
              </Box>
              <Box>
                {DeptChip && (
                  <Box>
                    <Box display="flex" gap={20}>
                      <TextField
                        label="Major"
                        sx={{ width: "30%" }}
                        value={formData.major || ""}
                        onChange={(e) =>
                          handleInputChange("major", e.target.value)
                        }
                      />
                      <TextField
                        sx={{ width: "40%" }}
                        label="Institution Name"
                        value={formData.institution || ""}
                        onChange={(e) =>
                          handleInputChange("institution", e.target.value)
                        }
                      />
                    </Box>
                    <Box display="flex" gap={10}>
                      <TextField
                        label="Location"
                        value={formData.location || ""}
                        onChange={(e) =>
                          handleInputChange("location", e.target.value)
                        }
                      />
                      <TextField
                        label="Grade in %"
                        type="number"
                        value={formData.grade || ""}
                        onChange={(e) =>
                          handleInputChange("grade", e.target.value)
                        }
                      />

                      <TextField
                        label="Awards"
                        minRows={4}
                        multiline={true}
                        sx={{ width: "30%" }}
                        value={formData.awards || ""}
                        onChange={(e) =>
                          handleInputChange("awards", e.target.value)
                        }
                      />
                    </Box>
                    <Button variant="contained" onClick={handleSubmitCurrent} sx={{color:"white"}}>
                      Save
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
            <Button
              startIcon={<AddIcon />}
              sx={{  color: "#0071D4" }}
              onClick={handleOpenPopup}
            >
              Add Another Education
            </Button>
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
          <Dialog
            aria-describedby="alert-dialog-slide-description"
            open={openPopup}
            onClose={handleClosePopup}
            maxWidth
          >
            <DialogTitle>Add Another Education</DialogTitle>
            <DialogContent>
              <Box pt={1}>
                <Box display="flex" flexWrap="wrap" pb={4} gap={2}>
                  {sourceIndustry.map((item) => (
                     <CustomChip
                     label={item}
                     onClick={() => setAnotherDeptChip(item)}
                     status={item === AnotherDeptChip}
                   />
                  ))}
                </Box>
                <Box display="flex" gap={5}>
                  <TextField
                    label="Major"
                    sx={{ width: "40%" }}
                    value={dialogFormData.major || ""}
                    onChange={(e) =>
                      handleDialogInputChange("major", e.target.value)
                    }
                  />
                  <TextField
                    sx={{ width: "40%" }}
                    label="Institution Name"
                    value={dialogFormData.institution || ""}
                    onChange={(e) =>
                      handleDialogInputChange("institution", e.target.value)
                    }
                  />
                </Box>
                <Box display="flex" gap={3}>
                  <TextField
                    label="Location"
                    sx={{ width: "30%" }}
                    value={dialogFormData.location || ""}
                    onChange={(e) =>
                      handleDialogInputChange("location", e.target.value)
                    }
                  />
                  <TextField
                    label="Grade in %"
                    type="number"
                    sx={{ width: "30%" }}
                    value={dialogFormData.grade || ""}
                    onChange={(e) =>
                      handleDialogInputChange("grade", e.target.value)
                    }
                  />

                  <TextField
                    label="Awards"
                    minRows={4}
                    multiline={true}
                    sx={{ width: "40%" }}
                    value={dialogFormData.awards || ""}
                    onChange={(e) =>
                      handleDialogInputChange("awards", e.target.value)
                    }
                  />
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClosePopup} >Go Back</Button>
              <Button onClick={handleSubmitPrev} variant="contained" autoFocus sx={{color:"white"}}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default College;
