import { Button, createStyles } from "@mui/material";
import React from "react";

const usdeStyles = createStyles({
  root: {
    background: "blue",
  },
});

function AddNewButton() {
  const classes = usdeStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">
        <img src="/add-icon.svg" alt="" />
        <span>New</span>
      </Button>
    </div>
  );
}

export default AddNewButton;
