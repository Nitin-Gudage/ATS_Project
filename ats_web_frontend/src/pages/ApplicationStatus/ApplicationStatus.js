import React, { useState } from "react";
import {
  Button,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { interviewData } from "../Data/InterviewData";
import CustomTable from "../../utills/CustomTable";
import View from "./View";
import { LuEye } from "react-icons/lu";
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

const ApplicationStatus = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleViewClick = (item) => {
    setSelectedItem(item); // Set the selected item
    setOpenDialog(true); // Open the dialog
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const filteredData = interviewData.filter((item) => {
    return !selectedStatus || item.status === selectedStatus;
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
      label: "Job Title",
      accessor: "Job_Title",
    },
    {
      label: "Status",
      accessor: "status",
      render: (rowData) => (
        <Typography style={{ color: getStatusColor(rowData.status) }} >
          {rowData.status}
        </Typography>
      ),
    },
    {
      label: "Action",
      render: (rowData, index) => (
        <Stack direction="row" alignItems="center" justifyContent="center">
        <Tooltip title="View">
          <RemoveRedEyeIcon
            onClick={() => handleViewClick(rowData)}
            size="small"
            color="primary"
            sx={{ cursor: 'pointer' }} // added cursor pointer for better UX
          />
        </Tooltip>
      </Stack>
      ),
    },
  ];

  return (
    <>
      <Card
        variant="outlined"
        className="PageScroll"
      >
        <CardContent>
          <Box display='flex'  justifyContent="end"  width="100%">
            
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
                <MenuItem value="On-Hold">On-Hold</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <CustomTable tableColumns={tableColumns} DataList={filteredData} />
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            maxWidth={"md"}
            fullWidth
          >
            <DialogTitle>View Details</DialogTitle>
            <DialogContent>
              <View selectedItem={selectedItem} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    </>
  );
};

export default ApplicationStatus;
