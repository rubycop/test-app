import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModalContext, ThemeContext } from "./context";
import { CarList } from "./pages/CarList";

export default function App() {
  // To detect default browser's theme
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(isBrowserDefaultDark() ? "dark" : "light");

  const AppRouter = () => (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CarList />} />
      </Routes>
    </BrowserRouter>
  );

  return (
    // Instead of using custom theme implementation
    // we can use native ThemeProvider from "@material-tailwind/react";
    // it's just an example of manual approach to show how react context uses
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ModalContext.Provider value={{ open, setOpen }}>
        <div className={`theme-${theme}`}>
          <AppRouter />
        </div>
      </ModalContext.Provider>
    </ThemeContext.Provider>
  );
}
