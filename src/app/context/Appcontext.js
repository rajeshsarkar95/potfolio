"use client";
import { createContext, useState, useContext } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => { 
  const [colormode, setColormode] = useState(false); 
  const [notification, setNotification] = useState(""); 
  const [showNotification, setShowNotification] = useState(false);

  const toggleColorMode = () => {
    const newMode = !colormode;
    setColormode(newMode);
    setNotification(newMode ? "Light Mode Activated" : "Dark Mode Activated");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
    console.log(newMode ? "Dark Mode" : "Light Mode");
  };
  return (
    <AppContext.Provider value={{toggleColorMode,colormode,notification,showNotification}}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);  
