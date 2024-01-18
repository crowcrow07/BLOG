import { useState, useEffect } from "react";

export default function useThemeEffect() {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const root = window.document.body;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    setDarkTheme(initialColorValue === "dark");
  }, []);

  useEffect(() => {
    // darkTheme이 변경될 때마다 data-theme 속성을 설정
    if (darkTheme !== undefined) {
      document.body.setAttribute("data-theme", darkTheme ? "dark" : "light");
    }
  }, [darkTheme]);

  return {
    darkTheme,
    setDarkTheme,
  };
}
