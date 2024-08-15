import React, { useState } from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Tooltip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { interviewData } from "../Data/InterviewData";
import CustomTable from "../../utills/CustomTable";
import PopupIntHis from "./PopupIntHis";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "orange";
    case "Selected":
      return "green";
    case "Not Selected":
      return "red";
    case "Viewed":
      return "blue";
    default:
      return "black";
  }
};
 
const getRoundsColor = (rounds) => {
  return "black";
};
 
const InterviwHistory = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedRounds, setSelectedRounds] = useState("");
  const [viewedItem, setViewedItem] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopup2, setOpenPopup2] = useState(false);
 
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
 
  const handleRoundsChange = (event) => {
    setSelectedRounds(event.target.value);
  };
 
  const handleView = (item) => {
      setViewedItem(item);
      setOpenPopup(true);
      console.log(item);
  };
 
  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  const handleClosePopup2 = () => {
    setOpenPopup2(false);
  };
 
  const filteredData = interviewData.filter((item) => {
    const statusFilter = !selectedStatus || item.status === selectedStatus;
    const roundsFilter =
      !selectedRounds || item.Rounds.includes(selectedRounds); 
 
    return statusFilter && roundsFilter;
  });
  const tableColumns = [
    {
      label: "Appl ID",
      accessor: "App_id",
    },
    {
      label: "Job ID",
      accessor: "Job_id",
    },
    {
      label: "Date",
      accessor: "Date",
    },
    {
      label: "Time",
      accessor: "time",
    },
    {
      label: "Rounds",
      accessor: "Rounds",
      render: (rowData) => (
        <Typography style={{ color: getRoundsColor(rowData.Rounds) }}>
          {rowData.Rounds}
        </Typography>
      ),
    },
    {
      label: "Mode",
      accessor: "Mode",
    },
    {
      label: "Host",
      accessor: "Host",
    },
    {
      label: "Status",
      accessor: "status",
      render: (rowData) => (
        <Typography style={{ color: getStatusColor(rowData.status) }}>
          {rowData.status}
        </Typography>
      ),
    },
    {
      label: "Action",
      render: (elm, index) => (
        <Stack direction={"row"}>
          <Tooltip title="View">
            {/* <Button
              variant="outlined"
              onClick={() => handleView(elm)} 
              size="small"
            >
              View
            </Button> */}
            <RemoveRedEyeIcon
            onClick={() => handleView(elm)} 
            size="small"
            color="primary"
            sx={{ cursor: 'pointer' }} 
          />
          </Tooltip>
        </Stack>
      ),
    },
  ];
 
  return (
    <>
      <Stack direction="row" justifyContent="end" pt={2} spacing={5}>
        <FormControl variant="outlined" sx={{ minWidth: 150 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={selectedStatus}
            onChange={handleStatusChange}
            label="Status"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Selected">Selected</MenuItem>
            <MenuItem value="Not Selected">Not Selected</MenuItem>
            {/* <MenuItem value="On-Hold">On-Hold</MenuItem> */}
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ minWidth: 150 }}>
          <InputLabel>Rounds</InputLabel>
          <Select
            value={selectedRounds}
            onChange={handleRoundsChange}
            label="Rounds"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="1 to 3">1 to 3</MenuItem>
            <MenuItem value="3 to 5">3 to 5</MenuItem>
            <MenuItem value="1 to 5">1 to 5</MenuItem>
            <MenuItem value="1 to 4">1 to 4</MenuItem>
            <MenuItem value="4 to 5">4 to 5</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <CustomTable tableColumns={tableColumns} DataList={filteredData} />
 
      <Dialog open={openPopup} onClose={handleClosePopup}>
        <DialogTitle>Interview Details</DialogTitle>
        <DialogContent>
          <PopupIntHis data={viewedItem}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
 
export default InterviwHistory;
 