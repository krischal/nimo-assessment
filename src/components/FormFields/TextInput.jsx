import React from "react";
import { TextField } from "@mui/material";
const TextInput = ({ label, value, onChange, style, ...props }) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    fullWidth
    margin="normal"
    variant="outlined"
    style={style}
    {...props}
  />
);

export default TextInput;
