import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CustomChip from "../../utills/CustomChip";

const Industry = ({ stepChange }) => {
  const [industry, setIndustry] = useState(null);
  const [subIndustry, setSubIndustry] = useState(null);
  const [domain, setDomain] = useState(null);

  const subIndustryList = [
    { id: 1, label: "Renewable Energy" },
    { id: 2, label: "R & D" },
    { id: 3, label: "IT" },
    { id: 4, label: "Telecommunication" },
    { id: 5, label: "Bio Technology" },
    { id: 6, label: "AI & ML" },
    { id: 7, label: "Aerospace & Defence" },
  ];

  const DomainList = [
    { id: 1, label: "Software Development" },
    { id: 2, label: "Hardware Design" },
    { id: 3, label: "Cyber Security" },
    { id: 4, label: "Data Science & Analysis" },
    { id: 5, label: "Networking" },
  ];
  const handleIndustry = (index) => {
    console.log(index);
    setIndustry(index);
  };
  const handleSubIndustry = (index) => {
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "calc(100% - 5px)",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: 0,
          background: "transparent",
        },
      }}
    >
      <Box>
        <Typography variant="h5" color="common.blue" pb={5}>
          Industry
        </Typography>
        <Stack direction="row" pb={1}>
          <Typography variant="p2" pb={2}>
            Which Industry are you Interested in
            <Typography pl={1} color="common.blue" variant="p2">
              (Select any 1)
            </Typography>
          </Typography>
        </Stack>

        <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
          <CustomChip
            label="Technical"
            onClick={() => handleIndustry(0)}
            status={industry === 0}
          />{" "}
          <CustomChip
            label="Non-Technical"
            onClick={() => handleIndustry(1)}
            status={industry === 1}
          />
        </Stack>
        <Stack direction="row" pb={2}>
          <Typography variant="p2">
            Which kind of Sub - Industry are you Interested in{" "}
            <Typography pl={1} color="common.blue" variant="p2">
              (Select any 1)
            </Typography>
          </Typography>
        </Stack>

        <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
          {subIndustryList.map((item, index) => (
            <CustomChip
              label={item.label}
              onClick={() => handleSubIndustry(item.id)}
              status={subIndustry === item.id}
            />
          ))}
        </Stack>
        <Stack direction="row" pb={2}>
          <Typography variant="p2">
            Which kind of Domain are you Interested in
            <Typography pl={1} color="common.blue" variant="p2">
              (Select any 1)
            </Typography>
          </Typography>
        </Stack>

        <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
          {DomainList.map((item, index) => (
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
          onClick={() => stepChange(2)}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default Industry;
