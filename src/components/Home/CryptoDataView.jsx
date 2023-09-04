import React from "react";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

export const CryptoAvatar = ({ image, size }) => (
  <Avatar
    alt="Image"
    src={image}
    sx={{ height: size ? size : 30, width: size ? size : 30, marginRight: 2 }}
  />
);

export const CryptoSymbol = ({ symbol }) => (
  <ListItemText primary={symbol.toUpperCase()} />
);

export const PriceChange = ({ value, symbol }) => (
  <Typography
    variant="subtitle2"
    sx={{
      fontWeight: 600,
      color: value > 0 ? "green" : "red",
    }}
  >
    {symbol === "$" && "$"} {value}
    {symbol === "%" && " %"}
  </Typography>
);

export const RemoveButton = ({ item, onRemove }) => (
  <IconButton
    aria-label="view"
    id="basic-button"
    onClick={() => onRemove(item)}
  >
    <ClearIcon sx={{ color: "lightgrey" }} />
  </IconButton>
);
