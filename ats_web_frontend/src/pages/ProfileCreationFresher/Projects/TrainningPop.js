import React, { useState } from 'react';
import { Box, Typography, TextField, FormControlLabel, Checkbox } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const TrainingPop = () => {
  const [text, setText] = useState('');
  const maxTextLength = 100;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Box>
        <Typography color="primary" variant="h5">
          Trainings and Certification
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          alignItems="center"
          pt={2}
          pb={3}  
        >
          <TextField
            label="Project Name"
            type="text"
            onChange={(e) => console.log(e.target.value)}
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
            <Box  sx={{
                    width: {
                      lg: "50%",
                      md: "50%",
                      sm: "50%",
                      xs: "50%",
                    },
                  }}>
              <Typography>Start Date</Typography>
              <TextField
                fullWidth
                type="date"
                onChange={(e) => console.log(e.target.value)}
                
              />
              <Typography fontWeight={600} fontSize="16px" color="#818181">
                Total: <span style={{ color: "black", fontWeight: "600" }}>6 Months</span>
              </Typography>
            </Box>
            <Box  sx={{
                    width: {
                      lg: "50%",
                      md: "50%",
                      sm: "50%",
                      xs: "50%",
                    },
                  }}>
              <Typography>End Date</Typography>
              <TextField
                type="date"
                fullWidth
                onChange={(e) => console.log(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <TextField
            label="Skills Learned"
            type="text"
            multiline
            minRows={4}
            fullWidth
            value={text}
            onChange={handleChange}
          />
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Typography>
              {text.length}/{maxTextLength}
            </Typography>
          </Box>
        </Box>
        <FormControlLabel
          control={
            <Checkbox
              icon={<TaskAltIcon />}
              checkedIcon={<TaskAltIcon />}
              onChange={(e) => console.log(e.target.checked)}
            />
          }
          label="Do you have a certificate?"
        />
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          pt={3}
          width="100%"
        >
          <TextField
            label="Certificate Name"
            type="text"
            onChange={(e) => console.log(e.target.value)}
            sx={{
                width: {
                  lg: "100%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
              }}
          />
          <TextField
            label="Certification Number"
            type="text"
            onChange={(e) => console.log(e.target.value)}
            sx={{
                width: {
                  lg: "100%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
              }}
          />
          <TextField
            label="Certification URL"
            type="text"
            onChange={(e) => console.log(e.target.value)}
            sx={{
                width: {
                  lg: "100%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
              }}
          />
        </Box>
      </Box>
    </>
  );
};

export default TrainingPop;
