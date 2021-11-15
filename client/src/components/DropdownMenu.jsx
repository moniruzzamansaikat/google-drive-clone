import { Divider, Menu, MenuItem } from "@mui/material";
import { DriveFolderUpload, FileUpload, Folder } from "@mui/icons-material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import CreateModal from "./CreateModal";

const DropdownWrapper = styled("div")({
  ".text": { marginLeft: "20px" },
});

function DropdownMenu({ TriggerButton }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [creatingFolder, setCreatingFolder] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <DropdownWrapper>
      <TriggerButton onClick={handleClick} />
      <Menu
        id="add-dropdown"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          onClick: (o) => {
            console.log(o);
          },
        }}
      >
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            setCreatingFolder(true);
          }}
        >
          <Folder />
          <span className="text">Folder</span>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <DriveFolderUpload />
          <span className="text">Folder upload</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FileUpload />
          <span className="text">File upload</span>
        </MenuItem>
      </Menu>

      <CreateModal
        open={creatingFolder}
        handleClose={() => setCreatingFolder(false)}
      />
    </DropdownWrapper>
  );
}

export default DropdownMenu;
