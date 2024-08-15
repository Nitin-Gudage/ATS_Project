import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import ViewJob from "./ViewJob";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { jobOpening } from "../Data/serviceData";

const JobPosting = () => {
  const [open, setOpen] = useState(false);

  const [page, setpage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleViewJob = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const closeForm = () => {
    setSelectedJob(null);
    setOpen(false);
  };
  return (
    <Box>
      <Card variant="outlined">
        <CardContent
         className="PageScroll"
        >
          <Grid container spacing={4} >
            {jobOpening.map((job) => (
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Card
                  variant="outlined"
                  sx={{
                    padding: { lg: 2, md: 1 },
                    borderColor: "#d3e0f5",
                    boxShadow: "0px 4px 6px rgba(211, 224, 245, 0.7)",
                  }}
                >
                  <CardContent>
                    <Stack
                      direction="row"
                      pb={1}
                      spacing={1}
                      alignItems="center"
                    >
                      <Avatar src={job.image} alt={job.id} />
                      <Box width="100%">
                        <Typography
                          variant="p4"
                          sx={{ fontSize: { lg: 18, md: 16, sm: 12 } }}
                          color="common.blue"
                        >
                          {job.position}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between">
                          <Typography
                            variant="p4"
                            sx={{ fontSize: { lg: 18, md: 16, sm: 12 } }}
                          >
                            {job.company}
                          </Typography>
                          <Box display="flex" alignItems="center">
                            <RoomOutlinedIcon sx={{ color: "common.grey" }} />
                            <Typography
                              variant="p4"
                              sx={{ fontSize: { lg: 18, md: 16, sm: 12 } }}
                            >
                              {job.location}
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      pb={2}
                    >
                      <Typography
                        color="common.grey"
                        variant="p4"
                        sx={{ fontSize: { lg: 18, md: 16, sm: 12 } }}
                      >
                        Experience:
                      </Typography>
                      <Typography
                        variant="p4"
                        sx={{ fontSize: { lg: 18, md: 16, sm: 12 } }}
                      >
                        {job.experience}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      pb={2}
                    >
                      <Typography
                        color="common.grey"
                        variant="p4"
                        sx={{ fontSize: { lg: 18, md: 16, sm: 12 } }}
                      >
                        Salary:
                      </Typography>
                      <Typography
                        variant="p4"
                        sx={{ fontSize: { lg: 18, md: 16, sm: 12 } }}
                      >
                        {job.salary}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      pb={2}
                    >
                      <Typography
                        color="common.grey"
                        variant="p4"
                        sx={{ fontSize: { lg: 18, md: 16, sm: 11 } }}
                      >
                        Date Posted:
                      </Typography>
                      <Typography
                        variant="p4"
                        sx={{ fontSize: { lg: 18, md: 16, sm: 12 } }}
                      >
                        {job.DatePosted}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      pb={2}
                    >
                      <Typography
                        color="common.grey"
                        variant="p4"
                        sx={{ fontSize: { lg: 18, md: 16, sm: 12 } }}
                      >
                        Deadline:
                      </Typography>
                      <Typography
                        variant="p4"
                        sx={{ fontSize: { lg: 18, md: 16, sm: 12 } }}
                        color="#fa7070"
                      >
                        {job.deadline}
                      </Typography>
                    </Stack>
                    <Divider sx={{ borderColor: "#d3e0f5" }} />
                    <Stack
      direction="row"
      pt={2}
      width="100%"
      spacing={2} 
    >
      <Button 
        variant="outlined" 
        sx={{ flex: 1 }}
      >
        Save
      </Button>
      <Button
        variant="contained"
        sx={{ flex: 1, color: "#fff" }}
        onClick={() => handleViewJob(job)}
      >
        View
      </Button>
    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Dialog
              open={open}
              onClose={closeForm}
              fullWidth
              maxWidth="lg"
              sx={{ borderRadius: 50 }}
            >
              {selectedJob && (
                <>
                  <DialogTitle
                    variant="h5"
                    display="flex"
                    gap={2}
                    alignItems={"center"}
                  >
                    <Avatar src={selectedJob.image} />
                    {selectedJob.company}
                  </DialogTitle>
                  <DialogContent>
                    <ViewJob selectedJob={selectedJob} />
                  </DialogContent>
                  <DialogActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      onClick={closeForm}
                      label="Back"
                      startIcon={<KeyboardBackspaceIcon />}
                    >
                      Back
                    </Button>
                    <Button variant="outlined" endIcon={<EastOutlinedIcon />}>
                      Next
                    </Button>
                  </DialogActions>
                </>
              )}
            </Dialog>
          </Grid>
          <Pagination
            count={2}
            variant="outlined"
            onChange={(event, value) => setpage(value)}
            color="primary"
            sx={{ right: 0, display: "flex", justifyContent: "end" }}
          />
        </CardContent>
      </Card>
    </Box>
  );
};
export default JobPosting;
