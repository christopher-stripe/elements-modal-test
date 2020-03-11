import React, { useState, useEffect, useCallback } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

import PaymentForm from "./PaymentForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleKeyUp = useCallback(
    e => {
      if (isOpen && e.keyCode === 27) {
        setIsOpen(false);
      }
    },
    [isOpen, setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);

  return (
    <main className="App">
      <button onClick={handleOpen}>Open dialog</button>
      <Dialog
        isOpen={isOpen}
        onDismiss={handleClose}
        aria-label="A payment form"
      >
        <PaymentForm onCancel={handleClose} />
      </Dialog>
    </main>
  );
}

export default App;
