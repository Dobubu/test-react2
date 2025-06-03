import { useEffect, useRef } from "react";

export function ModalDialog({ isOpen, children }) {
  const ref = useRef();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    console.log("Modal Show");

    const dialog = ref.current;
    dialog.showModal();

    return () => {
      console.log("Modal Close");
      dialog.close();
    };
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
}
