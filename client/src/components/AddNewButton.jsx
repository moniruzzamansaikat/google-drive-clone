import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const ButtonWrapper = styled("div")({
  margin: "1rem 0 1rem 1rem",

  button: {
    minWidth: "100px",
    color: "#606060",
    borderRadius: "30px",
    background: "#fff",
    fontWeight: "bold",
    textTransform: "capitalize",
    padding: "8px 1.4rem",

    "&:hover": {
      background: "#fff",
    },

    img: {
      width: "30px",
      marginRight: "10px",
    },
  },
});

function AddNewButton({ ...rest }) {
  return (
    <ButtonWrapper>
      <Button variant="contained" {...rest}>
        <img src="/add-icon.svg" alt="" />
        <span>New</span>
      </Button>
    </ButtonWrapper>
  );
}

export default AddNewButton;
