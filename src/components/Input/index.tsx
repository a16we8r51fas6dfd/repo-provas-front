import { TextField } from "@mui/material";
import React from "react";

const styles = {
  width: "400px",
};

interface Props {
  type: string;
  label: string;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ label, value, onChange, type }: Props) {
  return (
    <TextField
      sx={styles}
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      type={type}
    />
  );
}

export default Input;
