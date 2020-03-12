import React, { useState, useEffect, useCallback } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

import PaymentForm from "./PaymentForm";

function App() {
  // One of 'CLOSED' | 'COMBINED_ELEMENT' | 'SPLIT_ELEMENTS' | 'NO_ELEMENTS'
  const [dialogState, setDialogState] = useState("CLOSED");

  // Close the modal if the escape key is pressed
  const handleKeyUp = useCallback(
    e => {
      if (dialogState !== "CLOSED" && e.keyCode === 27) {
        setDialogState("CLOSED");
      }
    },
    [dialogState, setDialogState]
  );

  // Bind the escape key handler to the `document`
  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);

  return (
    <main className="App">
      <button onClick={() => setDialogState("COMBINED_ELEMENT")}>
        Open combined card elements dialog
      </button>
      <button onClick={() => setDialogState("SPLIT_ELEMENTS")}>
        Open split card elements dialog
      </button>
      <button onClick={() => setDialogState("NO_ELEMENTS")}>
        Open non-elements dialog
      </button>
      <Dialog
        isOpen={dialogState !== "CLOSED"}
        onDismiss={() => setDialogState("CLOSED")}
        aria-label="A payment form"
      >
        <PaymentForm
          impl={dialogState}
          onCancel={() => setDialogState("CLOSED")}
        />
      </Dialog>
    </main>
  );
}

export default App;
