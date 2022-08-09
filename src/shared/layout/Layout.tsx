import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box width="100vw" height="100vh">
      oi
      <Outlet />
    </Box>
  );
};
