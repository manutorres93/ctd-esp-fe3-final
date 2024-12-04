import React, { createContext, useState } from "react";

export const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({ theme: "light" }); // Default: light theme

  const toggleTheme = () => {
    setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };

  return (
    <GlobalContext.Provider value={{ state, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
