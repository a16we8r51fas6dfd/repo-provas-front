import { Box } from "@mui/material";
import React from "react";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  height: "100vh",
  position: "relative",
};

interface Props {
  children: React.ReactNode;
}

export function Form({ children }: Props) {
  return (
    <Box component="form" sx={styles}>
      {children}
    </Box>
  );
}
