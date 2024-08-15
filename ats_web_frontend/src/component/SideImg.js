import { Brightness1 } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const SideImg = ({ img, text }) => {
  return (
    <div>
      <Box sx={{position:"relative"}}>
        <Box
          component="img"
          pt={1.5}
          src={img}
          height="870px"
          width="100%"
          sx={{ borderRadius: 8, filter:"brightness(60%)"}}
        />
        <Typography variant="h2" color="white" sx={{zIndex:"1",position:"absolute", bottom:12, p:4}}>{text}</Typography>
      </Box>
    </div>
  );
};

export default SideImg;
