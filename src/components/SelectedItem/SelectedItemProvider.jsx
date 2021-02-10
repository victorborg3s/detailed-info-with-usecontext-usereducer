import React, { createContext, useReducer } from "react";

import selectedItemReducer from "./selectedItemReducer";
export const SelectedItemContext = createContext();

const SelectedItemProvider = ({ children }) => {
  const [selectedItem, dispatch] = useReducer(selectedItemReducer, {
    kind: 'sample',
    title: 'Click on an item to see details below',
    detail: 'Detailed information will be shown here...',
  });

  return (
    <SelectedItemContext.Provider value={{ selectedItem, dispatch }}>
      {children}
    </SelectedItemContext.Provider>
  );
};

export default SelectedItemProvider;
