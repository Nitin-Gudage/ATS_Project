import * as React from "react";
import {
  styled,
  Box,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import logo from "../asset/images/fullLogo.png";
import FormatOverlineIcon from "@mui/icons-material/FormatOverline";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import { useNavigate } from "react-router-dom";
 
const drawerWidth = 260;
 
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
 
const closedMixin = (theme) => ({
  borderTopRightRadius: 50,
  borderBottomRightRadius: 50,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});
 
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
 
const styles = {
  listItem: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 550,
    paddingLeft: 16,
  },
  listIcon: {
    color: "#fff",
    fontSize: 35,
    padding: 5,
  },
};
 
const selectedTabStyles = {
  borderLeft: "5px solid white",
  borderRadius: [0, 0, 2, 2],
};
 
const Sidebar = ({ open, toggleSidebar, details, handleTabChange }) => {
  const candidate = [
    {
      id: 1,
      tabName: "Profile Creation",
      icon: (
        <Tooltip title="Profile Creation">
          <FormatOverlineIcon
            sx={{ transform: "rotate(180deg)", }}
            style={styles.listIcon}
          />
        </Tooltip>
      ),
      route: details,
    },
    {
      id: 2,
      tabName: "Job Openings",
      icon: (
        <Tooltip title="Job Openings">
          <HomeWorkOutlinedIcon style={styles.listIcon} />
        </Tooltip>
      ),
      route: "/openings",
    },
    {
      id: 3,
      tabName: "Application Status",
      icon: (
        <Tooltip title="Application Status">
          <TroubleshootOutlinedIcon style={styles.listIcon} />
        </Tooltip>
      ),
      route: "/applications",
    },
    {
      id: 4,
      tabName: "My Interviews",
      icon: (
        <Tooltip title="My Interviews">
          <InventoryOutlinedIcon style={styles.listIcon} />
        </Tooltip>
      ),
      route: "/interviews",
    },
    {
      id: 5,
      tabName: "My Offers",
      icon: (
        <Tooltip title="My Offers">
          <ReceiptLongOutlinedIcon style={styles.listIcon} />
        </Tooltip>
      ),
      route: "/offers",
    },
  ];
 


  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState(details);

  const onTabChange = (tab) => {
    handleTabChange(tab);
    setSelectedTab(tab);
    navigate(tab);
  };
 
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <Box
          sx={{
            width: drawerWidth,
            bgcolor: "common.blue",
            height: "100%",
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
          }}
        >
          <Box
            display="flex"
            sx={(open && { justifyContent: "center" }) || (!open && { pl: 1 })}
            alignItems={"center"}
            pt={4}
            pb={2}
          >
            <Box
              component="img"
              src={logo}
              alt="logo"
            />
            <IconButton onClick={toggleSidebar}>
              {open && <KeyboardBackspaceIcon sx={{ color: "#fff" }} />}
            </IconButton>
          </Box>
          <List>
            {(candidate).map((item) => (
             
                <ListItem
                  key={item.id}
                  style={{ ...styles.listItem }}
                  onClick={() => onTabChange(item.route)}
                  sx={selectedTab === item.route ? selectedTabStyles : {}}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {item.tabName}
                </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
 
export default Sidebar;
 