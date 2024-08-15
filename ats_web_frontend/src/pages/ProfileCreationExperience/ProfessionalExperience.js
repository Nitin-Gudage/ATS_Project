
import React, { useState} from 'react';
import { Box, Button, Stack, TextField, Typography, Dialog,
  DialogActions,
  DialogContent,
  Chip, } from "@mui/material";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import WestSharpIcon from "@mui/icons-material/WestSharp";
import ProfExpPop from './ProfExpPop';
const ProfessionalExperience = ({ stepChange }) => {
  const [openPopup, setOpenPopup] = useState(false); 
  const [DeptChip, setDeptChip] = React.useState([]);

  const SalaryRange = [
    "0 to 3 LPA",
    "3 to 7 LPA +",
    "7 to 15 LPA +",
    "15 to 20 LPA +",
    "More than 20 LPA +",
  ];
  return (
    <Box
      sx={{
        height: "78vh",
        boxSizing: "border-box",
        height: "calc(100% - 5px)",
        overflowY: "auto",
        display:'flex', justifyContent:"space-between", flexDirection:'column',
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: 0,
          background: "transparent",
        },
      }}
    >
      <Typography color='common.blue' variant="h5" pb={2}>Professional Experience</Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
      >
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
            <Typography>Start Date</Typography>
            <TextField type="Date" onChange={(e) => console.log(e)} fullWidth />
          </Box>
        </Box>
      </Box>
      <Stack direction="row" justifyContent={"space-between"} flexWrap="wrap">
        <TextField
          sx={{ width: { lg: "49%", sm: "49%", xs: "100%" } }}
          minRows={4}
          multiline
          fullWidth
          label="Skills Learned"
          type="text"
          onChange={(e) => console.log(e)}
        />
        <TextField
          sx={{ width: { lg: "49%", sm: "49%", xs: "100%" } }}
          minRows={4}
          multiline
          fullWidth
          label="Responsibilities & KPI"
          type="text"
          onChange={(e) => console.log(e)}
        />
      </Stack>
      <Stack direction="row" flexWrap="wrap" rowGap={3}>
        <Stack
          direction="row"
          columnGap={2}
          flexWrap="wrap"
          sx={{ width: { lg: "50%", sm: "50%", xs: "100%" } }}
          rowGap={2}
        >
          {SalaryRange.map((item) => (
            <Chip
              key={item}
              label={item}
              onClick={() => setDeptChip(item)}
              variant={item === DeptChip ? "outlined" : "filled"}
              color={item === DeptChip ? "primary" : "default"}
            />
          ))}
        </Stack>
        <TextField
          width="50%"
          minRows={4}
          fullWidth
          multiline
          label="Achievements"
          type="text"
          onChange={(e) => console.log(e)}
        />
      </Stack>

      <Box
          width="100%"
          display="flex"
          justifyContent="end"
          onClick={() => setOpenPopup(true)}
          pb={2}
        >
          <Button type="text" sx={{color:"common.blue"}}>Add Another Company</Button>
          
        </Box>
        <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
        <DialogContent>
          <Typography variant="body1">
            <ProfExpPop></ProfExpPop>
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
          onClick={() => {
            stepChange(2);
          }}
        >
          prev
        </Button>
        <Button
          variant="outlined"
          endIcon={<ArrowRightAltSharpIcon />}
          onClick={() => {
            stepChange(4);
          }}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfessionalExperience;
