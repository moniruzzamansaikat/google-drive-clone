import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const MainContentWrapper = styled("div")({
  padding: "1rem",
});

function MainContent() {
  return (
    <MainContentWrapper>
      <Paper style={{ padding: "1rem" }}>
        <h2>My drive</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          temporibus!
        </p>
      </Paper>
    </MainContentWrapper>
  );
}

export default MainContent;
