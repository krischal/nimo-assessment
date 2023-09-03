import React, { useContext } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { GlobalContext } from "../../contexts/GlobalContext";

const BottomAlert = () => {
  const { bottomAlert, setBottomAlert } = useContext(GlobalContext);

  return (
    <Snackbar
      open={bottomAlert?.open}
      autoHideDuration={1000}
      onClose={() => setBottomAlert({ ...bottomAlert, open: false })}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={() => setBottomAlert({ ...bottomAlert, open: false })}
        severity={bottomAlert?.type ? "success" : "error"}
        variant="filled"
      >
        {bottomAlert?.message}
      </Alert>
    </Snackbar>
  );
};

export default BottomAlert;
