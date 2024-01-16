"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import { IconDarkMode, IconLightMode } from "../../../public/svgs";

export default function ThemeToggleButton() {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.body.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.body.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.body;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <>
      {darkTheme !== undefined && (
        <button className="w-16 h-16 mb-2" onClick={handleToggle}>
          {darkTheme ? (
            <Image
              src={IconLightMode}
              alt="LightMode"
              className="w-full h-full"
            />
          ) : (
            <Image
              src={IconDarkMode}
              alt="DarkMode"
              className="w-full h-full"
            />
          )}
        </button>
      )}
    </>
  );
}
