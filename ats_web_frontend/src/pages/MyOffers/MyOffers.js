import React, { useState } from "react";
import {
  Stack,
  Tooltip,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  TextField,
  CardContent,
  Card,
} from "@mui/material";
import { interviewData } from "../Data/InterviewData";
import CustomTable from "../../utills/CustomTable";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const MyOffers = () => {
  const [open, setOpen] = useState(false);

  const closeForm = () => {
    setOpen(false);
  };

  const tableColumns = [
    {
      label: "Sr. No.",
      render: (_, __, index) => index + 1,
    },
    {
      label: "Job ID",
      accessor: "Job_id",
    },
    {
      label: "Job Title",
      accessor: "Job_Title",
    },
    {
      label: "Received Date",
      accessor: "Date",
    },
    {
      label: "Expiry Date",
      accessor: "Date",
    },
    {
      label: "Location",
      accessor: "Mode",
    },
    {
      label: "Action",
      render: (elm, index) => (
        <Stack direction={"row"} gap={1}>
          <Tooltip title="View">
            <Avatar
              sx={{
                width: 20,
                height: 20,
                p: 0.5,
                color: "#000",
                border: "1px solid #0071D4",
                color: "#0071D4",
                backgroundColor: "rgb(from #0071D4 r g b / 20%)",
              }}
              onClick={() => {
                console.log(elm.Title);
              }}
            >
              <VisibilityOutlinedIcon />
            </Avatar>
          </Tooltip>
          <Tooltip title="Save">
            <Avatar
              sx={{
                width: 20,
                height: 20,
                p: 0.5,
                color: "#000",
                border: "1px solid #1B9B37",
                color: "#1B9B37",
                backgroundColor: "rgb(from #1B9B37 r g b / 20%)",
              }}
              onClick={() => {
                console.log(elm.Title);
              }}
            >
              <CheckOutlinedIcon  />
            </Avatar>
          </Tooltip>
          <Tooltip title="Close">
            <Avatar
              sx={{
                width: 20,
                height: 20,
                p: 0.5,
                color: "#000",
                border: "1px solid #F28989",
                color: "#F28989",
                backgroundColor: "rgb(from #F28989 r g b / 20%)",
              }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <CloseOutlinedIcon />
            </Avatar>
          </Tooltip>
        </Stack>
      ),
    },
  ];

  return (
    <>
      <Card variant="outlined" className="PageScroll" >
        <CardContent > 
          <CustomTable tableColumns={tableColumns} DataList={interviewData} />
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={closeForm}
        fullWidth
        maxWidth="sm"
        sx={{ borderRadius: 50 }}
      >
        <DialogTitle
          variant="h5"
          display="flex"
          gap={2}
          alignItems={"center"}
        ></DialogTitle>
        <DialogContent>
          <Typography pb={5}>
            Its very sad that hear from you this, we are going to miss you
            talented guy. kindly give your valuable reason for declining the
            offer.
          </Typography>
          <TextField fullWidth multiline minRows={4} label="Reason" />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MyOffers;
