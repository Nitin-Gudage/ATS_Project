import React, { useState, useEffect } from 'react';
import { Box, Button, Divider, Stack, TextField, Typography, Dialog,
  DialogActions,
  DialogContent, } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import OrganizationPop from './OrganizationPop';
const OrganizationalProjects = () => {
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
    <Box   sx={{
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
    }}>
   <Box>
   <Stack direction="row" alignItems="center" spacing={3} pb={4}>
      <Typography color={"common.blue"} variant="h5">
        Personal Projects
      </Typography>
      <Divider width="10%" sx={{borderColor:"common.blue",borderWidth: "1px",}}/>
      <Typography color={"common.blue"} variant="h5">Organizational Projects</Typography>
      </Stack>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" pb={3}>
        <TextField
          label="Company Name"
          type="text"
          onChange={(e) => console.log(e)}
        />
        <Box display="flex" gap={2} justifyContent="space-between">
          <Box>
            <Typography>Start Date</Typography>
            <TextField type="Date" onChange={(e) => console.log(e)} fullWidth />
            <Typography fontWeight={600} fontSize={"16px"} color="#818181"> Total :<span style={{ color: "black", fontWeight: "600" }}> 6 Months
                </span>
              </Typography>
          </Box>
          <Box>
            <Typography>Start Date</Typography>
            <TextField type="Date" onChange={(e) => console.log(e)} fullWidth />
          </Box>
        </Box>
      </Box>
      {/* <TextField label='Describe about Your project' type="text"  multiline={true} minRows={4} fullWidth={true} onChange={(e) => console.log(e)} /> */}
      <Box>
          <TextField
            label="Describe about Your project"
            type="text"
            multiline
            minRows={4}
            fullWidth
            value={text}
            onChange={handleChange}
          />
          <Box sx={{ display: "flex", justifyContent: "end"}}>
            <Typography>
              {textCount}/{maxTextLength}
            </Typography>
          </Box>
        </Box>
      <Typography color="common.black" pt={3} pb={3}>
        Whether do you Have Certificate
      </Typography>
      <Box display="flex" gap={3} flexWrap="wrap" pt={2}>
        <TextField
          sx={{ width: { lg: "45%", sm: "40%", xs: "100%" } }}
          label="Certification URL (Optional)"
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
            <OrganizationPop></OrganizationPop>
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
    </Box>
  );
};

export default OrganizationalProjects;
