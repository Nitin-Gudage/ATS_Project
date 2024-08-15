import {
    Avatar,
    Box,
    Stack,
    ThemeProvider,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
  import profile from "../asset/images/logo.png";
  import MenuOpenIcon from "@mui/icons-material/MenuOpen";
  import PlaylistRemoveOutlinedIcon from "@mui/icons-material/PlaylistRemoveOutlined";
  
  const Header = ({ changeMenu }) => {
    const [open, setOpen] = useState(true);
    const menuHandle = (type) => {
      setOpen(type);
      changeMenu(type);
    };
    return (
      <>

        <Box display="flex" alignItems="center">
          <Typography
            width="20px"
            sx={open?{paddingLeft:"0px"}:{paddingLeft:"20px"}}
            onClick={() => menuHandle(!open)}
          >
            {open ?  <PlaylistRemoveOutlinedIcon />:<MenuOpenIcon/> }
          </Typography>
          <Stack
            width="100%"
            direction="row"
            px={8}
            justifyContent="space-between"
          >
            <Box>
              <Typography fontSize={35} fontWeight={500}>
                Profile <span style={{ color: "#2396ff" }}>Creation</span>
              </Typography>
              <Typography>
                Fresher, kindly fill up the all given details
              </Typography>
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
  
  export default Header;
  