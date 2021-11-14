import { styled } from "@mui/system";
import React from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const MainLayoutWrapper = styled("div")({
  display: "grid",
  gridTemplateColumns: "250px auto",
});

function MainLayout() {
  return (
    <MainLayoutWrapper>
      <Sidebar />
      <MainContent />
    </MainLayoutWrapper>
  );
}

export default MainLayout;
