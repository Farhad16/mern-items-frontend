// ReusableModal.js
import React from "react";
import { Modal, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ReusableModal = ({
  title,
  content,
  open,
  onClose,
  onSuccess,
  btnText,
}: {
  title: string;
  content: React.ReactNode;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  btnText: string;
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white shadow-md p-4 rounded-lg flex flex-col min-w-[400px] gap-6">
        <div className="flex justify-between items-center pb-2 mb-2">
          <Typography variant="h6">{title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="mb-4">{content}</div>
        <div className="flex gap-4 items-center justify-end mt-4">
          <Button
            onClick={onClose}
            variant="outlined"
            color="inherit"
            className="mr-2"
          >
            Cancel
          </Button>
          <Button onClick={onSuccess} variant="contained" color="primary">
            {btnText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReusableModal;
