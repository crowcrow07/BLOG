"use client";
import useThemeEffect from "@/app/hooks/useThemeEffect";
import { IconDarkMode, IconLightMode } from "@/public/svgs";

import { LoadingSpinner2 } from "@/app/ui/loading/Spinner";

export default function ThemeToggleButton() {
  const { darkTheme, setDarkTheme } = useThemeEffect();

  const handleToggle = () => {
    setDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;

      // 테마 변경 시 로컬 스토리지에 저장
      window.localStorage.setItem("theme", newTheme ? "dark" : "light");

      return newTheme;
    });
  };

  return (
    <>
      {darkTheme !== undefined ? (
        <button className="w-full h-full" onClick={handleToggle}>
          {darkTheme ? (
            <IconLightMode width="100%" height="100%" />
          ) : (
            <IconDarkMode width="100%" height="100%" />
          )}
        </button>
      ) : (
        <LoadingSpinner2 />
      )}
    </>
  );
}
