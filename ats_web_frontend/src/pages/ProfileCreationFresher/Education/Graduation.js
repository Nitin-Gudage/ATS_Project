import React, { useState } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Divider,
} from "@mui/material";
import Theme from "../../../utills/Theme";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
const AwardsSection = ({ awards }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
    </>
  );
};
const Graduation = () => {
  const [sourceIndustry, setSourceIndustry] = useState([
    { id: 1, label: "School Education" },
    { id: 2, label: "College Education" },
  ]);
  const [selectedChip, setSelectedChip] = useState(null);
  const [selectedDialogChip, setselectedDialogChip] = useState(null);
  const [formData, setFormData] = useState({});
  const [dialogFormData, setDialogFormData] = useState({});
  const [currentEdu, setcurrentEdu] = useState(null);
  const [prevEdu, setprevEdu] = useState(null);

  const [openPopup, setOpenPopup] = useState(false);

  const handleAddItem = (item) => {
    setSelectedChip(item);
  };
  const handleDialogItems = (item) => {
    setselectedDialogChip(item);
  };

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
        <Box p={2} className="PageScroll">
          <Box>
          <Typography color={"common.blue"} variant="h5" pb={2}>
            Education
          </Typography>
          <Box>
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
              12th Education Details
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={2} pb={2}>
              {sourceIndustry.map((item) => (
                <Chip
                  label={item.label}
                  onClick={() => handleAddItem(item.id)}
                  icon={selectedChip === item.id ? <CloseIcon /> : <AddIcon />}
                  variant={selectedChip === item.id ? "outlined" : "filled"}
                  color={selectedChip === item.id ? "primary" : "default"}
                />
              ))}
            </Box>
            <Box>
              {selectedChip && (
                <Box>
                  <Stack
                    direction={"row"}
                    columnGap={5}
                    // justifyContent={"start"}
                    flexWrap={"wrap"}
                    pt={2}
                  >
                    <TextField
                      label="School Name"
                      sx={{
                        width: {
                          lg: "40%",
                          md: "40%",
                          sm: "100%",
                          xs: "100%",
                        },
                      }}
                      value={formData.major || ""}
                      onChange={(e) =>
                        handleInputChange("major", e.target.value)
                      }
                    />
                    <TextField
                      sx={{
                        width: {
                          lg: "30%",
                          md: "30%",
                          sm: "100%",
                          xs: "100%",
                        },
                      }}
                      label="Location"
                      value={formData.institution || ""}
                      onChange={(e) =>
                        handleInputChange("institution", e.target.value)
                      }
                    />
                  </Stack>
                  <Box
                    display="flex"
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    pt={2}
                    pb={2}
                  >
                    <TextField
                      sx={{
                        width: {
                          lg: "30%",
                          md: "30%",
                          sm: "100%",
                          xs: "100%",
                        },
                      }}
                      label="Board Authority"
                      value={formData.location || ""}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                    />
                    <TextField
                      sx={{
                        width: {
                          lg: "30%",
                          md: "30%",
                          sm: "100%",
                          xs: "100%",
                        },
                      }}
                      label="Grade "
                    />
                    <TextField
                      sx={{
                        width: {
                          lg: "30%",
                          md: "30%",
                          sm: "100%",
                          xs: "100%",
                        },
                      }}
                      label="Percentage "
                      type="Number"
                    />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
          <Box>
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
              10th Education Details
            </Typography>

            <Box>
              {/* {selectedChip && ( */}
              <Box>
                <Stack
                  direction={"row"}
                  spacing={5}
                  // justifyContent={"start"}
                  flexWrap={"wrap"}
                  pt={2}
                >
                  <TextField
                    label="School Name"
                    sx={{
                      width: {
                        lg: "40%",
                        md: "40%",
                        sm: "100%",
                        xs: "100%",
                      },
                    }}
                    value={formData.major || ""}
                    onChange={(e) => handleInputChange("major", e.target.value)}
                  />
                  <TextField
                    sx={{
                      width: {
                        lg: "30%",
                        md: "30%",
                        sm: "100%",
                        xs: "100%",
                      },
                    }}
                    label="Location"
                    value={formData.institution || ""}
                    onChange={(e) =>
                      handleInputChange("institution", e.target.value)
                    }
                  />
                </Stack>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  pt={2}
                  pb={2}
                >
                  <TextField
                    sx={{
                      width: {
                        lg: "30%",
                        md: "30%",
                        sm: "100%",
                        xs: "100%",
                      },
                    }}
                    label="Board Authority"
                    value={formData.location || ""}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                  />
                  <TextField
                    sx={{
                      width: {
                        lg: "30%",
                        md: "30%",
                        sm: "100%",
                        xs: "100%",
                      },
                    }}
                    label="Grade "
                  />
                  <TextField
                    sx={{
                      width: {
                        lg: "30%",
                        md: "30%",
                        sm: "100%",
                        xs: "100%",
                      },
                    }}
                    label="Percentage "
                    type="Number"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
export default Graduation;
