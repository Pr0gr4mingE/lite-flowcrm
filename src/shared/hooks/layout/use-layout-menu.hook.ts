import { useState, useCallback } from "react";

export function useLayoutMenu() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = useCallback(() => {
    setMenuAberto((prev) => !prev);
  }, []);

  const fecharMenu = useCallback(() => {
    setMenuAberto(false);
  }, []);

  return {
    menuAberto,
    alternarMenu,
    fecharMenu,
  };
}