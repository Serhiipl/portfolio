"use client";
import React, { createContext, useState } from "react";
import { links } from "@/lib/data";

type SectionNane = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionNane;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNane>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionNane>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
