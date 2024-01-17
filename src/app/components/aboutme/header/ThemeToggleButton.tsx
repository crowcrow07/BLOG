"use client";
import { useState, useEffect } from "react";

import { IconDarkMode, IconLightMode } from "../../../../../public/svgs";

export default function ThemeToggleButton() {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  const handleToggle = () => {
    setDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;

      // 테마 변경 시 로컬 스토리지에 저장
      window.localStorage.setItem("theme", newTheme ? "dark" : "light");

      return newTheme;
    });
  };

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

  return (
    <>
      {darkTheme !== undefined && (
        <button className="w-full h-full" onClick={handleToggle}>
          {darkTheme ? (
            <IconLightMode width="100%" height="100%" />
          ) : (
            <IconDarkMode width="100%" height="100%" />
          )}
        </button>
      )}
    </>
  );
}
