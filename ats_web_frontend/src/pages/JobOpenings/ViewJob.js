import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const ViewJob = ({ selectedJob }) => {
  return (
    <Container>
      <Stack
        justifyContent="space-between" direction={"row"} flexWrap={"wrap"}>
        <Stack direction="row" justifyContent="space-between" >
          <Typography variant="p1" color="common.grey"  width={200}>
            Job Name:
          </Typography>
          <Typography variant="p1" color="common.blue" width={300}>
            {selectedJob.position}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" >
          <Typography variant="p1" color="common.grey" width={200}>
            Reviews:
          </Typography>
        <Typography variant="p1" color="common.blue" width={300}>
            {selectedJob.review}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" >
          <Typography variant="p1" color="common.grey" width={200}>
            Type:
          </Typography>
        <Typography variant="p1" color="common.blue" width={300}>
            {selectedJob.type}
          </Typography>
        </Stack>
          <Stack direction="row" justifyContent="space-between" >
            <Typography variant="p1" color="common.grey" width={200}>
              Location:
            </Typography>
          <Typography variant="p1" color="common.blue" width={300}>
              {selectedJob.location}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" >
            <Typography variant="p1" color="common.grey" width={200}>
              Experience:
            </Typography>
          <Typography variant="p1" color="common.blue" width={300}>
              {selectedJob.experience}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" >
            <Typography variant="p1" color="common.grey" width={200}>
              Industry:
            </Typography>
          <Typography variant="p1" color="common.blue" width={300}>
              {selectedJob.industry}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" >
            <Typography variant="p1" color="common.grey" width={200}>
              Vacancy:
            </Typography>
          <Typography variant="p1" color="common.blue" width={300}>
              {selectedJob.vacancy}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" >
            <Typography variant="p1" color="common.grey" width={200}>
              Date Posted:
            </Typography>
          <Typography variant="p1" color="common.blue" width={300}>
              {selectedJob.DatePosted}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" >
            <Typography variant="p1" color="common.grey" width={200}>
              Department:
            </Typography>
          <Typography variant="p1" color="common.blue" width={300}>
              {selectedJob.dept}
            </Typography>
          </Stack>
      </Stack>
      <Box>
        <Typography variant="p1" color="common.grey" lineHeight={3}>
          Job Description
        </Typography>
        {selectedJob.description.map((desc) => (
          <>
            <Stack direction="row" spacing={2}>
              <TrendingFlatIcon sx={{ fontWeight: 5 }} />
              <Typography variant="p3"> {desc}</Typography>
            </Stack>
          </>
        ))}
      </Box>
      <Box>
        <Typography variant="p1" color="common.grey" lineHeight={3}>
          Skills Required
        </Typography>
        <Stack direction="row" flexWrap="wrap">
          {selectedJob.skills.map((desc) => (
            <>
              <Typography variant="p3" width={'20%'}> {desc}</Typography>
            </>
          ))}
        </Stack>
      </Box>
      <Box>
        <Typography variant="p1" color="common.grey" lineHeight={3}>
          Responsibilities
        </Typography>
        {selectedJob.responsibilities.map((desc) => (
          <>
            <Stack direction="row" spacing={2}>
              <TrendingFlatIcon sx={{ fontWeight: 5 }} />
              <Typography variant="p3"> {desc}</Typography>
            </Stack>
          </>
        ))}
      </Box>
    </Container>
  );
};

export default ViewJob;
