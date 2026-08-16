import { useEffect } from "react";

export function useEscapeKey(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) window.addEventListener("keydown", handleEsc);
    
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);
}