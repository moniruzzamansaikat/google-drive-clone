import React from "react";
import { Button, Divider, Paper } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";

const MainContentWrapper = styled("div")({
  padding: "1rem",

  ".placeholder_text": {
    textAlign: "center",
    fontSize: "1.8rem",
    fontWeight: "500",
  },
});

const TriggerButton = ({ ...rest }) => (
  <Button {...rest}>
    <span>My Drive</span>
    <ArrowDropDown />
  </Button>
);

function MainContent() {
  // todo: handle right click later
  function handleRightClick(e) {}

  return (
    <MainContentWrapper>
      <Paper
        style={{ padding: "1rem", minHeight: "100vh" }}
        onContextMenu={handleRightClick}
      >
        <DropdownMenu TriggerButton={TriggerButton} />
        <Divider />
        <p className="placeholder_text">A place for all of your files...</p>
      </Paper>
    </MainContentWrapper>
  );
}

export default MainContent;
