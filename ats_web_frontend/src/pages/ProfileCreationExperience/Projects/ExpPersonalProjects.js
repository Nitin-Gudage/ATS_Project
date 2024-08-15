import React, { useState, useEffect } from 'react';

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  Stack,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent
} from "@mui/material";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import WestSharpIcon from "@mui/icons-material/WestSharp";
import PersonalPop from '../../ProfileCreationFresher/Projects/PersonalPop';
const ExpOrgProjects = ({ handleNext, handleBack }) => {
  const [openPopup, setOpenPopup] = useState(false); 
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
      <Stack direction="row" alignItems="center" spacing={3} pb={3}>
        <Typography color={"common.blue"} variant="h5">
          Personal Projects{" "}
        </Typography>
        <Divider
          width="10%"
          sx={{  borderWidth: "1px" }}
        />
        <Typography  variant="h5">
          Organizational Projects
        </Typography>
      </Stack>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <TextField
          label="Company Name"
          type="text"
          onChange={(e) => console.log(e)}
        />
        <Box display="flex" gap={2} justifyContent="space-between">
          <Box>
            <Typography>Start Date</Typography>
            <TextField type="Date" onChange={(e) => console.log(e)} fullWidth />
          </Box>
          <Box>
            <Typography>End Date</Typography>
            <TextField type="Date" onChange={(e) => console.log(e)} fullWidth />
          </Box>
        </Box>
      </Box>
      <TextField
        label="Describe about Your project"
        type="text"
        multiline={true}
        minRows={4}
        fullWidth={true}
        onChange={(e) => console.log(e)}
      />
      <Typography color="common.black">
        Whether do you Have Certificate
      </Typography>
      <Box display="flex" gap={3} flexWrap="wrap" pt={2}>
        {/* <TextField
          label="Describe about Your project"
          type="text"
          multiline={true}
          minRows={4}
          fullWidth={true}
          onChange={(e) => console.log(e)}
        /> */}

        <Box display="flex" gap={3} flexWrap="wrap" pt={2}>
          <TextField
            sx={{ width: { lg: "45%", sm: "40%", xs: "100%" } }}
            label="Project URL (Optional)"
            type="text"
            onChange={(e) => console.log(e)}
          />
          <TextField
            sx={{ width: { lg: "50%", sm: "50%", xs: "100%" } }}
            label="Key Skills (Optional)"
            type="text"
            multiline
            minRows={4}
            fullWidth
            onChange={(e) => console.log(e)}
          />
          <FormControl sx={{ alignItems: "center", pl: 2 }}>
            <FormControlLabel
              control={<Radio />}
              label="have you done any Organization/ Freelance Projects?"
            />
          </FormControl>
        </Box>
      </Box>
      <Box
          width="100%"
          display="flex"
          justifyContent="end"
          onClick={() => setOpenPopup(true)}
          pb={2}
        >
          <Button type="text" sx={{color:"common.blue"}}>Add More</Button>
        </Box>
        <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
        <DialogContent>
          <Typography variant="body1">
            <PersonalPop></PersonalPop>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => setOpenPopup(false)}>Close</Button>
            <Button onClick={() => setOpenPopup(false)} variant="contained" sx={{color:"white"}} >Save</Button>
          </Stack>
        </DialogActions>
      </Dialog>
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
    </Box>
  );
};

export default ExpOrgProjects;
