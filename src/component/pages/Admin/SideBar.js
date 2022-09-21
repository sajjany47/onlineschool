import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const settings = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      text: "Courses",
      icon: <MenuBookIcon />,
    },
    {
      text: "Students",
      icon: <GroupsIcon />,
      page: <Students />,
    },
    {
      text: "Exams",
      icon: <i class="fa-solid fa-pen-to-square" style={{ fontSize: 23 }}></i>,
    },
    {
      text: "Results",
      icon: (
        <i
          class="fa-solid fa-square-poll-vertical"
          style={{ fontSize: 21 }}
        ></i>
      ),
    },
    {
      text: "Notice Board",
      icon: <i class="fa-solid fa-paper-plane" style={{ fontSize: 21 }}></i>,
    },
    {
      text: "LiveClasses",
      icon: <i class="fa-solid fa-desktop" style={{ fontSize: 21 }}></i>,
    },
    {
      text: "Notifications",
      icon: <i class="fa-solid fa-bell" style={{ fontSize: 21 }}></i>,
    },
  ];

  const drawer = (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <i class="fa-solid fa-graduation-cap"></i> Online School
      </h1>
      <Divider />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {settings.map((list, index) => {
          const { text, icon } = list;
          return (
            <ListItem key={text}>
              <Link
                to={`/${text}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemButton>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}

                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default SideBar;
