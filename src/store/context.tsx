"use client";
import React from "react";
import { createContext } from "react";

const GlobalContext = createContext<any>(null);

export const AppProvider = ({ children }: any) => {
  return (
    <GlobalContext.Provider value="dark">{children}</GlobalContext.Provider>
  );
};
