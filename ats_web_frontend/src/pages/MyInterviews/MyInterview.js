import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import InterviwHistory from "./InterviewHistory";
import UpcomingInterview from "./UpcomingInterview";
const MyInterview = () => {
  const [pages, setPages] = useState(0);
  const handleNextStepChange = () => {
    setPages(1);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        height: "80vh",
        boxSizing: "border-box",
        maxHeight: "calc(100% - 5px)",
        overflowY: "auto",
        display:"flex",justifyContent:"space-between",flexDirection:"column",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: 0,
          background: "transparent",
        },
        padding: { lg: 2, md: 1 },
        borderColor: "#d3e0f5",
        boxShadow: "0px 4px 6px rgba(211, 224, 245, 0.7)",
      }}
    >
      {pages === 0 && <UpcomingInterview />}
      {pages === 1 && <InterviwHistory />}

      <Stack
        direction="row"
        justifyContent="end"
        paddingTop={5}
        
      >
        <Button
          variant="contained"
          style={{ color: "#fff" }}
          
          onClick={()=>{pages==0?setPages(1):setPages(0)}}
        >
          {pages==0?"Interview History":"Back"}
          
        </Button>
      </Stack>
    </Card>
  );
};

export default MyInterview;
