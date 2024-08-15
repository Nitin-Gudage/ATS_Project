import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Divider,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Card,
  Avatar,
} from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CustomRating from "../../../utills/CustomRating";
import { SkillsRate } from "../../Data/serviceData";
import { common } from "@mui/material/colors";

export default function ProfileCreation2() {
  const [selectedVersion, setSelectedVersion] = useState({});
  const [rating, setRating] = useState({});
  const [tempRating, setTempRating] = useState({});
  const [open, setOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleVersionChange = (stepName, itemName, value) => {
    setSelectedVersion((prevState) => ({
      ...prevState,
      [stepName]: {
        ...prevState[stepName],
        [itemName]: value,
      },
    }));
  };

  const handleIconClick = (stepName, itemName) => {
    setSelectedStep(stepName);
    setSelectedItem(itemName);
    setTempRating(rating[stepName]?.[itemName] || 0);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedStep(null);
    setSelectedItem(null);
  };

  const handleRatingChange = (value) => {
    setTempRating(value);
  };

  const handleSaveRating = () => {
    setRating((prevState) => ({
      ...prevState,
      [selectedStep]: {
        ...prevState[selectedStep],
        [selectedItem]: tempRating,
      },
    }));
    handleCloseModal();
  };

  return (
    <Box
      sx={{
        height: "78vh",
        boxSizing: "border-box",
        overflowY: "auto",
        height: "calc(100% - 5px)",
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
      {SkillsRate.map((step, index) => (
        <React.Fragment key={index}>
          <Typography lineHeight={3} fontWeight={600}>
            {step.name} Versions
          </Typography>
          <Stack direction="row" flexWrap="wrap">
            {step.languages.map((item, idx) => (
              <React.Fragment key={idx}>
                <TextField
                  sx={{ mr: 3, width: { lg: "30%", md: "40%" } }}
                  required
                  label={`${item} version`}
                  type="number"
                  onChange={(e) =>
                    handleVersionChange(step.name, item, e.target.value)
                  }
                  InputProps={{
                    endAdornment: (
                      <Box display="flex" alignItems="center" gap={1}>
                        <Divider orientation="vertical" flexItem />
                        <Avatar sx={{ bgcolor:"#0071D4"}}>
                          <MilitaryTechIcon 
                            onClick={() => handleIconClick(step.name, item)}
                          />
                        </Avatar>
                      </Box>
                    ),
                  }}
                />
              </React.Fragment>
            ))}
          </Stack>
        </React.Fragment>
      ))}
      <Typography lineHeight={4} fontWeight={600} fontSize={"16px"}>
        Proficiency Level ( Well
        <span style={{ color: "#0071D4", fontWeight: "600" }}> impressive</span>
        )
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        sx={{
          border: "1px solid #D1A32C66",
          borderRadius: "40px",
          p: 3,
          alignItems: "center",
          gap: 2,
        }}
      >
        {SkillsRate.map((step, index) => (
          <React.Fragment key={index}>
            {step.languages.map((item, idx) => (
              <CustomRating
                key={idx}
                disabled={true}
                label={item}
                version={selectedVersion[step.name]?.[item] || 0}
                value={rating[step.name]?.[item] || 0}
              />
            ))}
          </React.Fragment>
        ))}
      </Stack>
      <Dialog
        open={open}
        onClose={handleCloseModal}
        PaperProps={{
          sx: {
            borderRadius: "20px",
            overflow: "hidden",
          },
        }}
      >
        <DialogContent>
          <CustomRating
            label={`Rate ${selectedStep} - ${selectedItem}`}
            value={tempRating}
            onChange={handleRatingChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSaveRating}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
