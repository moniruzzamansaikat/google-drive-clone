import React from "react";
import { Modal, Box, Button, TextField } from "@mui/material/";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  broderRadius: "40px",
};

function CreateModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h3 style={{ margin: "0", marginBottom: "10px" }}>New Folder</h3>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          size="small"
          defaultValue="Untitled Folder"
        />

        <div
          style={{
            marginTop: "1.3rem",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <div>
            <Button size="small">Cancel</Button>
            <Button size="small">Create</Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default CreateModal;
