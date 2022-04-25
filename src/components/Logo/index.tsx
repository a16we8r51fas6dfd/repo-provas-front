import { Box } from "@mui/material";
import logo from "../../assets/logo.png";

const styles = {
  display: "fixed",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "60px",
};

function LogoTop() {
  return (
    <Box component="image" sx={styles}>
      <img src={logo} alt="repoprovas" />
    </Box>
  );
}

export default LogoTop;
