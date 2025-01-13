"use client";

import React, { createContext, useContext, useState } from "react";

// Create the context
const SettingsContext = createContext({
  options: {
    numDice: 2,
    numSides: 6,
    startNumber: 1,
    numSteps: 1,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOptions: function (_options) {},
});

// Custom hook to access the context
export function useSettingsContext() {
  return useContext(SettingsContext);
}

// SettingsContextProvider component
export function SettingsContextProvider({ children }) {
  // Initialize the context state with default options
  const { options } = useContext(SettingsContext);
  const [userOptions, setUserOptions] = useState(options);

  // Define the context value
  const contextValue = {
    options: userOptions,
    setOptions: (updatedOptions) => {
      // Update the context state with the new options
      setUserOptions((prevOptions) => ({
        ...prevOptions,
        ...updatedOptions,
      }));
    },
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
}
