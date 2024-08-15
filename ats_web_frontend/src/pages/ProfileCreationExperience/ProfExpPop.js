import React, { useState} from 'react';
import { Box, Typography, TextField, FormControlLabel, Checkbox, Stack, Chip } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
const ProfExpPop = ({ text, textCount, handleChange, maxTextLength }) => {
   
  const [DeptChip, setDeptChip] = React.useState([]);

  const SalaryRange = [
    "0 to 3 LPA",
    "3 to 7 LPA +",
    "7 to 15 LPA +",
    "15 to 20 LPA +",
    "More than 20 LPA +",
  ];
  return (
    <>
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
          sx={{
            width: {
              lg: "100%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
          }}
        />
        <Box display="flex" gap={2} justifyContent="space-between" width="100%">
          <Box
          sx={{
            width: {
              lg: "50%",
              md: "50%",
              sm: "100%",
              xs: "100%",
            },
          }}>
            <Typography>Start Date</Typography>
            <TextField type="Date" onChange={(e) => console.log(e)} fullWidth />
          </Box>
          <Box 
          sx={{
            width: {
              lg: "50%",
              md: "50%",
              sm: "100%",
              xs: "100%",
            },
          }}>
            <Typography>End Date</Typography>
            <TextField type="Date" onChange={(e) => console.log(e)} fullWidth />
          </Box>
        </Box>
      </Box>
      <Stack direction="row" justifyContent={"space-between"} flexWrap="wrap">
        <TextField
         sx={{
            width: {
              lg: "100%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
          }}
          minRows={4}
          multiline
          fullWidth
          label="Skills Learned"
          type="text"
          onChange={(e) => console.log(e)}
        />
        <TextField
         sx={{
            width: {
              lg: "100%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
          }}
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
          sx={{ width: { lg: "100%", sm: "100%", xs: "100%" } }}
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
        sx={{
            width: {
              lg: "100%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
          }}
          width="50%"
          minRows={4}
          fullWidth
          multiline
          label="Achievements"
          type="text"
          onChange={(e) => console.log(e)}
        />
      </Stack>
    </>
  );
};

export default ProfExpPop;
