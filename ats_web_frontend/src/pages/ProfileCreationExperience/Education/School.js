import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import Theme from "../../../utills/Theme";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import WestSharpIcon from "@mui/icons-material/WestSharp";
import {
  Box,
  Card,
  Typography,
  CardContent,
  Button,
  TextField,
  Stack,ThemeProvider,
  Divider,
} from "@mui/material";

const School = ({ handleNext, handleBack }) => {
  return (
    <>
    <ThemeProvider theme={Theme}>
     <Box sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        boxSizing: "border-box",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: 0,
          background: "transparent",
        },
      }}>
       <Box>
       <Stack direction="row" alignItems="center" spacing={3}  pb={3}>
        <Typography color={"common.blue"} variant="h5">
          College Education{" "}
        </Typography>
        <Divider
          width="10%"
          sx={{ borderColor: "common.blue", borderWidth: "1px" }}
        />
        <Typography color={"common.blue"}  variant="h5">
          School Education
        </Typography>
      </Stack>
            <Typography variant="p2" lineHeight={6} >HSC Education Details</Typography>
            <Box display="flex" gap={5} >
            <TextField label="Institution Name" sx={{ width: "60%", pb:3 }}></TextField>
            <TextField label="Location"></TextField>
            </Box>
            <Box display="flex" gap={5} >
            <TextField label="Board Authority" ></TextField>
            <TextField label="Grade"></TextField>
            <TextField label="Percentage"></TextField>
            </Box>
            <Typography variant="p2" lineHeight={6} >SSLC Education Details</Typography>
            <Box display="flex" gap={5} >
            <TextField label="Institution Name" sx={{ width: "60%" , pb:3 }}></TextField>
            <TextField label="Location"></TextField>
            </Box>
            <Box display="flex" gap={5}  pb={6} >
            <TextField label="Board Authority" ></TextField>
            <TextField label="Grade"></TextField>
            <TextField label="Percentage"></TextField>
            </Box>
       </Box>
            <Stack direction="row" justifyContent={"space-between"} pb={5}>
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
        
      
      </Box>
      </ThemeProvider>
    </>
  );
};

export default School;
