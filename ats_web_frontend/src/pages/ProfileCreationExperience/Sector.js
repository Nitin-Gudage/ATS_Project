import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CustomChip from "../../utills/CustomChip";

const Sector = ({ stepChange }) => {
  const [subIndustry, setSubIndustry] = useState(null);
  const [domain, setDomain] = useState(null);
  const [subSectorVisible, setsubSectorVisible] = useState('hidden');


  const Sector = [
    { id: 1, label: "Tertiary" },
    { id: 2, label: "Quaternary" },
    { id: 3, label: "Secondary" },
  ];

  const SubSector = [
    { id: 1, label: "Education" },
    { id: 2, label: "Healthcare" },
    { id: 3, label: "Hospitality & Tourisms" },
  ];
  const handleSubIndustry = (index) => {
    setsubSectorVisible('visible')
    setSubIndustry(index);
  };

  const handleDomain = (index) => {
    console.log(index);

    setDomain(index);
  };

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        height: "calc(100% - 5px)",
        overflowY: "auto",
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
        <Typography variant="h5" color="common.blue" pb={5}>
          Sector
        </Typography>
        <Box pb={3}>
          <Typography variant="p2" pb={2}>
            Which Kind of Sector are you Interested{" "}
            <Typography pl={1} color="common.blue" variant="p2">
              (Select any 1)
            </Typography>
          </Typography>
        </Box>
        <Stack direction={"row"} gap={2} flexWrap="wrap" pb={5}>
          {Sector.map((item, index) => (
            <CustomChip
              label={item.label}
              onClick={() => handleSubIndustry(item.id)}
              status={subIndustry==item.id}
            />
          ))}
        </Stack>
        <Box pb={3} visibility={subSectorVisible}>
          <Typography variant="p2">
            Which kind of Sub - Sector are you Interested in
            <Typography color="common.blue" variant="p2" pl={1}>
              (Select any 1)
            </Typography>
          </Typography>
        </Box>
        <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3} visibility={subSectorVisible}>
          {SubSector.map((item, index) => (
            <CustomChip
            label={item.label}
            onClick={() => handleDomain(item.id)}
            status={domain === item.id}
          />
          ))}
        </Stack>
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <Button
          label="Back"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => stepChange(0)}
        >
          {" "}
          Back
        </Button>
        <Button
          variant="outlined"
          endIcon={<EastOutlinedIcon />}
          onClick={() => stepChange(1)}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default Sector;
