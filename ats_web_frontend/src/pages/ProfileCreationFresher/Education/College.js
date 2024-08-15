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
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import Theme from "../../../utills/Theme";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UnderGraduatePop from "./UnderGraduatePop";
import PostGraduatePop from "./PostGraduatePop";

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

const College = () => {
  const [sourceIndustry, setSourceIndustry] = useState([
    { id: 1, label: "School Education" },
    { id: 2, label: "College Education" },
  ]);
  const [selectedChip, setSelectedChip] = useState(null);
  const [formData, setFormData] = useState({});
  const [openUndergraduatePopup, setOpenUndergraduatePopup] = useState(false);
  const [openPostgraduatePopup, setOpenPostgraduatePopup] = useState(false);
  const [isPostGraduateChecked, setIsPostGraduateChecked] = useState(false);

  const handleAddItem = (item) => {
    setSelectedChip(item);
  };

  const handleInputChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmitCurrent = () => {
    console.log(formData);
  };

  const handleOpenUndergraduatePopup = () => {
    setOpenUndergraduatePopup(true);
  };

  const handleCloseUndergraduatePopup = () => {
    setOpenUndergraduatePopup(false);
  };

  const handleOpenPostgraduatePopup = () => {
    setOpenPostgraduatePopup(true);
  };

  const handleClosePostgraduatePopup = () => {
    setOpenPostgraduatePopup(false);
  };

  const handleCheckboxChange = (event) => {
    setIsPostGraduateChecked(event.target.checked);
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Box p={2} className="PageScroll">
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
               Graduate
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={2} pb={2}>
              {sourceIndustry.map((item) => (
                <Chip
                  key={item.id}
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
                    flexWrap={"wrap"}
                    pt={2}
                  >
                    <TextField
                      label="School Name"
                      sx={{
                        width: {
                          lg: "30%",
                          md: "28%",
                          sm: "100%",
                          xs: "100%",
                        },
                      }}
                      value={formData.schoolName || ""}
                      onChange={(e) =>
                        handleInputChange("schoolName", e.target.value)
                      }
                    />
                    <TextField
                      fullWidth
                      sx={{
                        width: {
                          lg: "30%",
                          md: "28%",
                          sm: "100%",
                          xs: "100%",
                        },
                      }}
                      label="College Name"
                      value={formData.collegeName || ""}
                      onChange={(e) =>
                        handleInputChange("collegeName", e.target.value)
                      }
                    />
                    <TextField
                      fullWidth
                      sx={{
                        width: {
                          lg: "30%",
                          md: "28%",
                          sm: "100%",
                          xs: "100%",
                        },
                      }}
                      label="Board Authority"
                      value={formData.boardAuthority || ""}
                      onChange={(e) =>
                        handleInputChange("boardAuthority", e.target.value)
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
                          md: "28%",
                          sm: "100%",
                          xs: "100%",
                        },
                      }}
                      label="Location"
                      value={formData.location || ""}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                    />
                    <TextField
                      sx={{
                        width: {
                          lg: "30%",
                          md: "28%",
                          sm: "100%",
                          xs: "100%",
                        },
                      }}
                      label="Grade"
                      value={formData.grade || ""}
                      onChange={(e) =>
                        handleInputChange("grade", e.target.value)
                      }
                    />
                    <TextField
                      label="Awards"
                      minRows={4}
                      multiline={true}
                      sx={{
                        width: {
                          lg: "30%",
                          md: "28%",
                          sm: "100%",
                          xs: "100%",
                        },
                      }}
                      value={formData.awards || ""}
                      onChange={(e) =>
                        handleInputChange("awards", e.target.value)
                      }
                    />
                    <Button
              startIcon={<AddIcon />}
              sx={{
                marginBottom: 2,
                color: "#0071D4",
                display: "flex",
                justifyContent: "end",
                pt: 2,
                width: "100%",
              }}
              onClick={handleOpenUndergraduatePopup}
              size="small"
            >
              Add Another Education
            </Button>
                  </Box>
                </Box>
              )}
            </Box>
            
            <Dialog
              aria-describedby="alert-dialog-slide-description"
              open={openUndergraduatePopup}
              onClose={handleCloseUndergraduatePopup}
            >
              <DialogTitle>Under Graduate</DialogTitle>
              <DialogContent>
                <UnderGraduatePop
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseUndergraduatePopup}>Go Back</Button>
                <Button
                  onClick={handleSubmitCurrent}
                  variant="contained"
                  autoFocus
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isPostGraduateChecked}
                  onChange={handleCheckboxChange}
                  icon={<CheckCircleIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
              }
              label="Have you done your post graduate?"
            />
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
              Post Graduate
            </Typography>
            <Box>
              <Stack
                direction={"row"}
                columnGap={5}
                flexWrap={"wrap"}
                pt={2}
              >
                <TextField
                  label="Major"
                  sx={{
                    width: {
                      lg: "30%",
                      md: "30%",
                      sm: "100%",
                      xs: "100%",
                    },
                  }}
                  value={formData.pgMajor || ""}
                  onChange={(e) => handleInputChange("pgMajor", e.target.value)}
                  disabled={!isPostGraduateChecked}
                 
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
                  label="College Name"
                  value={formData.pgCollegeName || ""}
                  onChange={(e) =>
                    handleInputChange("pgCollegeName", e.target.value)
                  }
                  disabled={!isPostGraduateChecked}
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
                  label="Board Authority"
                  value={formData.pgBoardAuthority || ""}
                  onChange={(e) =>
                    handleInputChange("pgBoardAuthority", e.target.value)
                  }
                  disabled={!isPostGraduateChecked}
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
                  label="Location"
                  value={formData.pgLocation || ""}
                  onChange={(e) => handleInputChange("pgLocation", e.target.value)}
                  disabled={!isPostGraduateChecked}
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
                  label="Grade"
                  value={formData.pgGrade || ""}
                  onChange={(e) => handleInputChange("pgGrade", e.target.value)}
                  disabled={!isPostGraduateChecked}
                />
                <TextField
                  label="Awards"
                  minRows={4}
                  multiline={true}
                  sx={{
                    width: {
                      lg: "30%",
                      md: "30%",
                      sm: "100%",
                      xs: "100%",
                    },
                  }}
                  value={formData.pgAwards || ""}
                  onChange={(e) => handleInputChange("pgAwards", e.target.value)}
                  disabled={!isPostGraduateChecked}
                />
              </Box>
              <Button
                startIcon={<AddIcon />}
                sx={{
                  marginBottom: 2,
                  color: "#0071D4",
                  display: "flex",
                  justifyContent: "end",
                  pt: 2,
                  width: "100%",
                }}
                onClick={handleOpenPostgraduatePopup}
                size="small"
                disabled={!isPostGraduateChecked}
              >
                Add Another Education
              </Button>
              <Dialog
                aria-describedby="alert-dialog-slide-description"
                open={openPostgraduatePopup}
                onClose={handleClosePostgraduatePopup}
              >
                <DialogTitle>Post Graduate</DialogTitle>
                <DialogContent>
                  <PostGraduatePop
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClosePostgraduatePopup}>Go Back</Button>
                  <Button
                    onClick={handleSubmitCurrent}
                    variant="contained"
                    autoFocus
                  >
                    Save
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
export default College;
