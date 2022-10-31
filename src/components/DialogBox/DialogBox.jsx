import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  info: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  warning: {
    position: "absolute",
    color: "red",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "4px solid red",
    boxShadow: 24,
    p: 4,
  },

/** 
* Dialog Box React functional component
* @summary 
    Supports two type of dialog box
     1. Info
     2. Warning

* @prop {string} type - type value `info|warning`
* @prop {json object} message - Dialog box message - {
  title: "title message",
  message: "message value"
}
* @prop {function} onCloseCallback - Callback function on close
*/
};
function DialogBox({ type, message, onCloseCallback }) {
  return (
    <Modal
      open={true}
      onClose={onCloseCallback}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style[type]}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {message.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {message.message}
        </Typography>
      </Box>
    </Modal>
  );
}

export default DialogBox