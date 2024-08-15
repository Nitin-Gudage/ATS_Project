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
} from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CustomRating from "../../../utills/CustomRating";
import { SkillsRate } from "../../Data/serviceData";

export default function Technical2() {
  const [selectedVersion, setSelectedVersion] = useState({});
  const [rating, setRating] = useState({});
  const [open, setOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [tempRating, setTempRating] = useState(0);

  const handleVersionChange = (stepName, itemName, value) => {
    setSelectedVersion((prevState) => ({
      ...prevState,
      [stepName]: {
        ...prevState[stepName],
        [itemName]: value,
      },
    }));
  };

  const handleBlur = (stepName, itemName) => {
    const value = selectedVersion[stepName]?.[itemName];
    if (value) {
      setSelectedStep(stepName);
      setSelectedItem(itemName);
      setTempRating(rating[stepName]?.[itemName] || 0);
      setOpen(true);
    }
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
    <>
      {SkillsRate.map((step) => (
        <>
          <Typography lineHeight={3} fontWeight={600}>
            {step.name} Versions
          </Typography>
          <Stack direction="row" flexWrap="wrap" columnGap={2}>
            {step.languages.map((item) => (
              <TextField
                key={item}
                sx={{ width: { lg: "30%", md: "48%" } }}
                required
                fullWidth
                label={`${item} version`}
                type="number"
                onChange={(e) =>
                  handleVersionChange(step.name, item, e.target.value)
                }
                onBlur={() => handleBlur(step.name, item)}
                InputProps={{
                  endAdornment: (
                    <Box display="flex" alignItems="center">
                      <Divider orientation="vertical" flexItem />
                      <MilitaryTechIcon
                        onClick={() => handleBlur(step.name, item)}
                      />
                    </Box>
                  ),
                }}
              />
            ))}
          </Stack>
        </>
      ))}
      <Stack direction="row" flexWrap="wrap" columnGap={3} mt={2}  
      sx={{
          border: "1px solid #D1A32C66",
          borderRadius: "40px",
          p: 3,
          alignItems: "center",
          gap: 2,
        }}>
        {SkillsRate.map((step) => (
          <>
            {step.languages.map(
              (item) =>
                selectedVersion[step.name]?.[item] &&
                rating[step.name]?.[item] !== undefined && (
                  <CustomRating
                    key={item}
                    onChange={()=>console.log()}
                    label={item}
                    version={selectedVersion[step.name]?.[item] || 0}
                    value={rating[step.name]?.[item] || 0}
                  />
                )
            )}
          </>
        ))}
      </Stack>
      <Dialog
        open={open}
      
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
    </>
  );
}
