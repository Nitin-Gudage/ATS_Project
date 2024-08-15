import { Box, ThemeProvider } from "@mui/material";
import React, {useState } from "react";
import Theme from "./Theme";
import Sidebar from "../component/Sidebar";
import NavBar from "../component/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import Profile from "../pages/ProfileCreationFresher/Profile";
import JobPosting from "../pages/JobOpenings/JobPosting";
import ApplicationStatus from "../pages/ApplicationStatus/ApplicationStatus";
import MyOffers from "../pages/MyOffers/MyOffers";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BasicDetails from "../pages/BasicDetails";
import ProfileExperience from "../pages/ProfileCreationExperience/ProfileExperience";
import MyInterview from "../pages/MyInterviews/MyInterview";
 
const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState(null);
  const [login, setLogin] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile Creation");
 
  const toggleSidebar = () => {
    setOpen(!open);
    console.log(open);
  };
 
  const handleDetails = (selectedStatus) => {
    setDetails(selectedStatus);
    setDetails(selectedStatus?'/experience-profile':'/fresher-profile')
    console.log("Selected fresher:", selectedStatus);
  };
  const LoginDetails = (log) => {
    setLogin(log);
    // console.log("Selected status:", log);
  };
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: "flex" }}>
        {login && details != null && (
          <Sidebar
            open={open}
            toggleSidebar={toggleSidebar}
            details={details}
            handleTabChange={handleTabChange}
          />
        )}
        <Box component="main" sx={{ flexGrow: 1, px: 2, py: 1 }}>
          {login && details != null && (
            <NavBar
              open={open}
              toggleSidebar={toggleSidebar}
              activeTab={activeTab}
            />
          )}
          {login ? (
            <Routes>
             
              <Route path="/fresher-profile" element={<Profile />} />
              <Route
                path="/experience-profile"
                element={<ProfileExperience />}
              />
              <Route path="/openings" element={<JobPosting />} />
              <Route path="/applications" element={<ApplicationStatus />} />
              <Route path="/interviews" element={<MyInterview />} />
              <Route path="/offers" element={<MyOffers />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          ) : (
            <Navigate to="/login" />
          )}
          {children}
          <Routes>
            <Route
              path="/login"
              element={<Login LoginDetails={LoginDetails} handleDetails={handleDetails}/>}
            />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
 
export default Layout;