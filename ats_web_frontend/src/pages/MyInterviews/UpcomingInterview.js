import React, { useState } from "react";
import { Typography, Button, Stack, Tooltip } from "@mui/material";
import { interviewData } from "../Data/InterviewData";
import CustomTable from "../../utills/CustomTable";
 
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
      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
      <Tooltip title="View">
        <Button
          variant="outlined"
          onClick={() => {
            console.log(elm.Title);
          }}
          size="small"
          sx={{
            padding: '2px 6px',
            fontSize: '0.9rem',
            minWidth: 'auto',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          Attend
        </Button>
      </Tooltip>
    </Stack>
    ),
  },
];
 
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
 
const UpcomingInterview = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
 
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
 
  const filteredData = interviewData.filter(
    (item) => item.status === "Pending"
  );
 
  return (
    <>
      <CustomTable tableColumns={tableColumns} DataList={filteredData} />
    </>
  );
};
 
export default UpcomingInterview;