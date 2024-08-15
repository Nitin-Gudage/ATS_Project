import React from 'react';
import { Box, Typography, TextField, FormControlLabel, Checkbox, Stack } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
const PersonalPop = ({ text, textCount, handleChange, maxTextLength }) => {
  return (
    <>
      <Typography color={"common.blue"} variant="h5">
      Personal Projects
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        pb={3}
        alignItems="center"
        pt={3}
      >
        <TextField
          label="Project Name"
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
          <Box sx={{
                width: {
                  lg: "100%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
              }}>
            <Typography>Start Date</Typography>
            <TextField
              type="Date"
              onChange={(e) => console.log(e)}
              fullWidth
              
            />
            <Typography fontWeight={600} fontSize={"16px"} color="#818181">
              Total :
              <span style={{ color: "black", fontWeight: "600" }}>
                6 Months
              </span>
            </Typography>
          </Box>
          <Box    sx={{ width: { lg: "100%",md: "100%",  sm: "100%", xs: "100%",}}}>
            <Typography>End Date</Typography>
            <TextField
              type="Date"
              onChange={(e) => console.log(e)}
              fullWidth
            
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <TextField
          label="Responsibilities"
          type="text"
          multiline
          minRows={4}
          fullWidth
          value={text}
          onChange={handleChange}
        />
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Typography>
            {textCount}{maxTextLength}
          </Typography>
        </Box>
      </Box>
      <FormControlLabel
        control={
          <Checkbox icon={<TaskAltIcon />} checkedIcon={<TaskAltIcon />} />
        }
        label=" Describe about your Project"
      />
      <Box display="flex" flexWrap="wrap" gap={3} pt={3}>
        <Stack
          direction="column"
          sx={{ width: { lg: "40%", sm: "40%", xs: "100%" } }}
        >
          <TextField
            sx={{ pb: 2 }}
            label="Project name"
            type="text"
            onChange={(e) => console.log(e)}
          />
          <TextField
            label="Project URL (Optional)"
            type="text"
            onChange={(e) => console.log(e)}
          />
        </Stack>
        <TextField
          label="Key Skills"
          type="text"
          multiline={true}
          minRows={4}
          sx={{ width: { lg: "55%", sm: "55%", xs: "100%" } }}
          onChange={(e) => console.log(e)}
        />
      </Box>
    </>
  );
};

export default PersonalPop;
