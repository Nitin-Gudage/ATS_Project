import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import IntrenPop from "./IntrenPop";
const InternShip = ({ stepChange }) => {
  const [openPopup, setOpenPopup] = useState(false); 
  const [text, setText] = useState("");
  const [textCount, setTextCount] = useState(0);
  const maxTextLength = 350;
  const handleChange = (e) => {
    const newText = e.target.value.slice(0, maxTextLength);
    setText(newText);
  };
  useEffect(() => {
    setTextCount(text.length);
  }, [text]);
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
      <Box>
        <Typography color={"common.blue"} variant="h5">
          Internships and Certification
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
            label="Company Name"
            type="text"
            onChange={(e) => console.log(e)}
          />
          <Box display="flex" gap={2} justifyContent="space-between">
            <Box>
              <Typography>Start Date</Typography>
              <TextField
                type="Date"
                onChange={(e) => console.log(e)}
                fullWidth
              />
              <Typography fontWeight={600} fontSize={"16px"} color="#818181"> Total :<span style={{ color: "black", fontWeight: "600" }}> 6 Months
                </span>
              </Typography>
            </Box>
            <Box>
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
              {textCount}/{maxTextLength}
            </Typography>
          </Box>
        </Box>
        {/* <FormControlLabel
          control={
            <Checkbox icon={<TaskAltIcon />} checkedIcon={<TaskAltIcon />} />
          }
          label=" Whether do you Have Certificate"
        /> */}
        <Box display="flex" flexWrap="wrap" gap={3} pt={3}>
          <Stack
            direction="column"
            sx={{ width: { lg: "40%", sm: "40%", xs: "100%" } }}
          >
            <TextField
              sx={{ pb: 2 }}
              label="Certificate name"
              type="text"
              onChange={(e) => console.log(e)}
            />
            <TextField
              label="Certification URL"
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
        <Box
          width="100%"
          display="flex"
          justifyContent="end"
          onClick={() => setOpenPopup(true)}
          pb={2}
        >
          <Button type="text" sx={{color:"common.blue"}}>Add More</Button>
        </Box>
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <Button
          label="Back"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => stepChange(1)}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          endIcon={<EastOutlinedIcon />}
          onClick={() => stepChange(3)}
        >
          Next
        </Button>
      </Stack>
      <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
        <DialogContent>
          <Typography variant="body1">
            <IntrenPop></IntrenPop>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => setOpenPopup(false)}>Close</Button>
            <Button onClick={() => setOpenPopup(false)} variant="contained" sx={{color:"white"}} >Save</Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default InternShip;
