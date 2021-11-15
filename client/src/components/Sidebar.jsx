import React, { useState } from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Inbox,
  People,
  Delete,
  StarBorder,
  ExpandLess,
  ExpandMore,
  Computer,
} from "@mui/icons-material";
import styled from "@mui/styled-engine";
import AddNewButton from "./AddNewButton";
import DropdownMenu from "./DropdownMenu";

const SidebarWrapper = styled("div")({
  minHeight: "100vh",

  li: {
    padding: 0,
    fontSize: "14px !important",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",

    "&.Mui-selected": {
      background: "#d7eeff",

      "& span, & svg": {
        color: "#4f69c4",
      },
    },

    "& span, & svg": {
      fontSize: "14px",
      fontWeight: "600",
      color: "#000",
    },

    "& span": {
      marginLeft: "-30px",
    },
  },
});

function Sidebar() {
  const [selectedIndex, setSelectedItem] = useState(0);
  const [open, setOpen] = useState(true);

  const toggleMyDriveDropdown = () => {
    setOpen(!open);
  };

  return (
    <SidebarWrapper>
      <List>
        <DropdownMenu TriggerButton={AddNewButton} />

        <ListItem
          onClick={() => setSelectedItem(0)}
          selected={selectedIndex === 0}
        >
          <ListItemButton onClick={toggleMyDriveDropdown}>
            <ListItemIcon>
              <Computer />
            </ListItemIcon>
            <ListItemText className="text" primary="My Drive" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        {/* collapsibel menu for my drive item */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="li">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItem
          onClick={() => setSelectedItem(1)}
          selected={selectedIndex === 1}
        >
          <ListItemButton>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText className="text" primary="Inbox" />
          </ListItemButton>
        </ListItem>

        <ListItem
          onClick={() => setSelectedItem(2)}
          selected={selectedIndex === 2}
        >
          <ListItemButton>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText className="text" primary="Shared With Me" />
          </ListItemButton>
        </ListItem>

        <ListItem
          onClick={() => setSelectedItem(3)}
          selected={selectedIndex === 3}
        >
          {" "}
          <ListItemButton>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText className="text" primary="Trash" />
          </ListItemButton>
        </ListItem>
      </List>
    </SidebarWrapper>
  );
}

export default Sidebar;
