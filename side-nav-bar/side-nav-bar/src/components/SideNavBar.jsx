import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { Home, Work, ListAlt, HelpOutline } from "@mui/icons-material";

const menuItems = [
  { text: "Profile", icon: <Home /> },
  { text: "Apply for a Job", icon: <Work /> },
  { text: "Applied Jobs", icon: <ListAlt /> },
  { text: "Help & Support", icon: <HelpOutline /> },
];

const SideNavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      variant="permanent"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      sx={{
        width: open ? 200 : 60,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 200 : 60,
          transition: "width 0.3s, border-radius 0.3s",
          overflowX: "hidden",
          backgroundColor: "#000", // Black background
          color: "gold", // Golden text
          borderTopRightRadius: open ? "15px" : "0", // Curved top-right
          borderBottomRightRadius: open ? "15px" : "0", // Curved bottom-right
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column", // Arrange items vertically
          gap: "15px", // Add spacing between items
          paddingTop: "20px", // Padding at the top
        }}
      >
        {menuItems.map((item, index) => (
          <Tooltip title={!open ? item.text : ""} placement="right" key={index}>
            <ListItem
              button
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Darken background on hover
                  transform: "scale(1.1)", // Slight scaling for wave effect
                  borderRadius: "8px", // Slightly round individual items
                },
              }}
            >
              <ListItemIcon sx={{ color: "gold" }}>{item.icon}</ListItemIcon>
              {open && (
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    style: {
                      whiteSpace: "nowrap", // Prevent text wrapping
                      overflow: "hidden", // Hide overflow
                      textOverflow: "ellipsis", // Add ellipsis if text overflows
                    },
                  }}
                />
              )}
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default SideNavBar;
