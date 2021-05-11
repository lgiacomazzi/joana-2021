import { createContext, ReactNode, useState } from "react";

type JobContextData = {
  currentPosition: number;
  paginate: (number) => void;
  setClientWidth: (number) => void;
  setPortfolioWidth: (number) => void;
  setCurrentPosition: (number) => void;
};

type JobContextProviderProps = {
  children: ReactNode;
};

export const JobContext = createContext({} as JobContextData);

export function JobContextProvider({ children }: JobContextProviderProps) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [portfolioWidth, setPortfolioWidth] = useState(0);

  function paginate(newDirection: number) {
    console.log("clientWidth " + clientWidth);
    console.log("currentPosition " + currentPosition);
    console.log("portfolioWidth " + portfolioWidth);

    if (newDirection > 0) {
      if (currentPosition + clientWidth < portfolioWidth) {
        setCurrentPosition(currentPosition + clientWidth);
      }
    } else if (newDirection < 0) {
      if (currentPosition > 0) {
        setCurrentPosition(currentPosition - clientWidth);
      }
    }
  }

  return (
    <JobContext.Provider
      value={{
        currentPosition,
        paginate,
        setClientWidth,
        setPortfolioWidth,
        setCurrentPosition,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}
