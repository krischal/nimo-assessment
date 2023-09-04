import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { GlobalContext } from "../../contexts/GlobalContext";

const ConfirmationDialog = () => {
  const { confirmDialog, setConfirmDialog } = useContext(GlobalContext);

  const handleClose = () => {
    setConfirmDialog({ ...confirmDialog, open: false });
  };

  const handleConfirm = () => {
    confirmDialog?.onSuccess();
    setConfirmDialog({ ...confirmDialog, open: false });
  };
  return (
    <Dialog
      open={confirmDialog?.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{confirmDialog?.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {confirmDialog?.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm}>{confirmDialog?.buttonTitle}</Button>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
