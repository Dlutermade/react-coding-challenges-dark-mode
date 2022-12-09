import React from "react";
import { DarkModeContextProvider } from "./darkMode";

export default function App({ children }: { children: React.ReactNode }) {
  return <DarkModeContextProvider>{children}</DarkModeContextProvider>;
}
