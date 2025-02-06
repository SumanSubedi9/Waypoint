import { createContext, useContext, useState } from "react";
import ConfirmationDialog from "../ui/ConfirmationDialog/ConfirmationDialog";

const ConfirmationContext = createContext();

export function ConfirmationProvider({ children }) {
  const [confirmationState, setConfirmationState] = useState({
    show: false,
    message: "",
    onConfirm: null,
    onCancel: null,
  });

  const confirm = (message) => {
    return new Promise((resolve) => {
      setConfirmationState({
        show: true,
        message,
        onConfirm: () => {
          setConfirmationState((prev) => ({ ...prev, show: false }));
          resolve(true);
        },
        onCancel: () => {
          setConfirmationState((prev) => ({ ...prev, show: false }));
          resolve(false);
        },
      });
    });
  };

  return (
    <ConfirmationContext.Provider value={{ confirm }}>
      {children}
      {confirmationState.show && (
        <ConfirmationDialog
          message={confirmationState.message}
          onConfirm={confirmationState.onConfirm}
          onCancel={confirmationState.onCancel}
        />
      )}
    </ConfirmationContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useConfirmation() {
  const context = useContext(ConfirmationContext);
  if (!context) {
    throw new Error("useConfirmation must be used within ConfirmationProvider");
  }
  return context;
}
