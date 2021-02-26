import { createContext, ReactNode, useState } from "react";

type BioContextData = {
  isBioOpen: boolean;
  toggleBio: () => void;
};

type BioContextProviderProps = {
  children: ReactNode;
};

export const BioContext = createContext({} as BioContextData);

export function BioContextProvider({ children }: BioContextProviderProps) {
  const [visibility, setVisibility] = useState(false);

  function toggleBio() {
    if (visibility) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  }
  return (
    <BioContext.Provider value={{ isBioOpen: visibility, toggleBio }}>
      {children}
    </BioContext.Provider>
  );
}
