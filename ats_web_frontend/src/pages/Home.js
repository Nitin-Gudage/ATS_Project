import React from "react";
import Layout from "../utills/Layout";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Profile from "./ProfileCreationFresher/Profile";
import JobPosting from "./JobOpenings/JobPosting";
import ApplicationStatus from "./ApplicationStatus/ApplicationStatus";
import MyOffers from "./MyOffers/MyOffers";
import MyInterview from './MyInterviews/MyInterview'

const Home = () => {
  return (
    <Layout>
      <>
        <Box sx={{ textaAlign: "center" }}>
          {/* <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/openings" element={<JobPosting />} />
            <Route path="/applications" element={<ApplicationStatus />} />
            <Route path="/interviews" element={<MyInterview />} />
            <Route path="/offers" element={<MyOffers />} />
          </Routes> */}
        </Box>
      </>
    </Layout>
  );
};

export default Home;
