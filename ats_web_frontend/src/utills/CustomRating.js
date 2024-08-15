import React from "react";
import { Box, Rating, Typography, styled } from "@mui/material";

const CustomRating = ({ value, label, version, disabled, onChange }) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#0092ff",
    },
    "& .MuiRating-iconHover": {
      color: "#0092ff",
    },
    "& .MuiRating-iconEmpty": {
      color: "#C7C7C7",
    },
    "& .MuiRating-icon": {
      pointerEvents: "none",
    },
  });

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", minWidth:220,}}
    >
      <Typography>
        {label} {version}
      </Typography>
      <StyledRating
        value={value}
        onChange={(event, newValue) => onChange(newValue)}
        disabled={disabled}
        icon={
          <Box
            sx={{
              width: 12,
              height: 20,
              borderRadius: 20,
              backgroundColor: "#0071D4",
              margin: 0.2,
            }}
          ></Box>
        }
        emptyIcon={
          <Box
            sx={{
              width: 12,
              height: 20,
              borderRadius: 20,
              backgroundColor: "#C7C7C7",
              margin: 0.2,
            }}
          ></Box>
        }
      />
    </Box>
  );
};

export default CustomRating;
