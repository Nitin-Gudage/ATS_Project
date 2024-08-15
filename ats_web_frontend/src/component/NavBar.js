import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import profile from "../asset/images/logo1.png";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const NavBar = ({ open, toggleSidebar, activeTab }) => {
  const data =
    activeTab === "/fresher-profile" || activeTab === "/experience-profile"
      ? 1
      : activeTab === "/openings"
      ? 2
      : activeTab === "/applications"
      ? 3
      : activeTab === "/interviews"
      ? 4
      : activeTab === "/interviews"
      ? 5:1

  const headers = [
    {
      id: 1,
      primHead: "Profile",
      SecHead: "Creation",
      text: "Freshers, Kindly fill up all the given details",
    },
    {
      id: 2,
      primHead: "Job",
      SecHead: "Openings",
      text: "Here you go, find your perfect job with our ATS",
    },
    {
      id: 3,
      primHead: "Application",
      SecHead: "Status",
      text: "Monitor your application status with a single click",
    },
    {
      id: 4,
      primHead: "My",
      SecHead: "Interviews",
      text: "Find your upcoming and past interviews and interview status",
    },
    {
      id: 5,
      primHead: "My",
      SecHead: "Offers",
      text: "Check out your latest job offers with our ATS",
    },

  ];

  const currentHeader = headers.find((header) => header.id === data);

  return (
    <>
      <Box display={"flex"} alignItems={"center"} pb={2}>
        {!open && (
          <MenuOpenIcon
            sx={!open ? { paddingLeft: "0px" } : { paddingLeft: "20px" }}
            onClick={toggleSidebar}
          />
        )}
        <Stack
          width={"100%"}
          direction={"row"}
          px={5}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography fontSize={35} fontWeight={500}>
              {currentHeader.primHead}{" "}
              <span style={{ color: "#2396ff" }}>{currentHeader.SecHead}</span>
            </Typography>
            <Typography>{currentHeader.text}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: 150,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>
              <NotificationsOutlinedIcon fontSize="large" />
            </Typography>
            <Avatar src={profile} alt="avatar" sx={{ height: 75, width: 75 }} />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default NavBar;
