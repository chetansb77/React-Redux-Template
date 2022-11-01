import * as React from "react";
import Button from "@mui/material/Button";
import DialogBox from "./components/DialogBox/DialogBox";
import Clock from "./components/Clock/Clock";
import { Counter } from "./components/Counter/Counter";

interface DialogMessage {
  title?: string;
  message?: string;
}

function App() {
  const [isOpenDialogBox, setOpenDialogBox] = React.useState(false);
  const handleOpen = () => setOpenDialogBox(true);
  const handleClose = () => setOpenDialogBox(false);

  const [type, setType] = React.useState('');
  const [dialogMessage, setDialogMessage] = React.useState<DialogMessage>({});

  const openInfoDialogBox = () => {
    setType('info');
    setDialogMessage({
      title: "Info Message",
      message: "This is an info message to display"
    })
    handleOpen();
  }

  const openWarningDialogBox = () => {
    setType("warning");
    setDialogMessage({
      title: "Warning Message",
      message: "This is an warning message to display",
    });
    handleOpen();
  };

  return (
    <div className="m-4 grid gap-4 grid-cols-3">
      <Button variant="contained" onClick={openInfoDialogBox}>
        Open Info modal
      </Button>
      <Button variant="contained" onClick={openWarningDialogBox}>
        Open Warning modal
      </Button>
      {isOpenDialogBox && (
        <DialogBox
          type={type}
          message={dialogMessage}
          onCloseCallback={handleClose}
        />
      )}
      <Clock />
      <Counter />
    </div>
  );
}

export default App;
