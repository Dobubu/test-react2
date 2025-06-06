import { useState, useEffect } from "react";

import { ModalDialog } from "./modalDialog";

export function ModalComponent() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <button onClick={() => setShowDialog(true)}>Open dialog</button>
      <ModalDialog isOpen={showDialog}>
        Hello there!
        <br />
        <button
          onClick={() => {
            setShowDialog(false);
          }}
        >
          Close
        </button>
      </ModalDialog>
    </>
  );
}
