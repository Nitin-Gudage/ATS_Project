import React from "react";
import { Box, Stack, TextField } from "@mui/material";

const UnderGraduatePop = ({ formData, handleInputChange }) => {
  return (
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
              lg: "45%",
              md: "45%",
              sm: "100%",
              xs: "100%",
            },
          }}
          value={formData.schoolName || ""}
          onChange={(e) => handleInputChange("schoolName", e.target.value)}
        />
        <TextField
          fullWidth
          sx={{
            width: {
              lg: "45%",
              md: "45%",
              sm: "100%",
              xs: "100%",
            },
          }}
          label="College Name"
          value={formData.collegeName || ""}
          onChange={(e) => handleInputChange("collegeName", e.target.value)}
        />
        <TextField
          fullWidth
          sx={{
            width: {
              lg: "45%",
              md: "45%",
              sm: "100%",
              xs: "100%",
            },
          }}
          label="Board Authority"
          value={formData.boardAuthority || ""}
          onChange={(e) => handleInputChange("boardAuthority", e.target.value)}
        />
        <TextField
          sx={{
            width: {
              lg: "45%",
              md: "45%",
              sm: "100%",
              xs: "100%",
            },
          }}
          label="Location"
          value={formData.location || ""}
          onChange={(e) => handleInputChange("location", e.target.value)}
        />
        <TextField
          sx={{
            width: {
              lg: "45%",
              md: "45%",
              sm: "100%",
              xs: "100%",
            },
          }}
          label="Grade"
          value={formData.grade || ""}
          onChange={(e) => handleInputChange("grade", e.target.value)}
        />
        <TextField
          label="Awards"
          minRows={4}
          multiline={true}
          sx={{
            width: {
              lg: "100%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
          }}
          value={formData.awards || ""}
          onChange={(e) => handleInputChange("awards", e.target.value)}
        />
      </Stack>
     
    </Box>
  );
};

export default UnderGraduatePop;
