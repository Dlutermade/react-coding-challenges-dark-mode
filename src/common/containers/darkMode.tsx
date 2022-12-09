import React, { createContext, useEffect, useState } from "react";

type DarkMode = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const darkModeContext = createContext<DarkMode>(null!);

const DarkModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");

      return () => {
        document.body.classList.remove("dark-mode");
      };
    }
  }, [darkMode]);

  return (
    <darkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
};

export { darkModeContext, DarkModeContextProvider };
