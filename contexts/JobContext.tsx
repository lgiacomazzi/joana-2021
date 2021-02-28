import { createContext, ReactNode, useState } from "react";

type JobContextData = {
  page: number;
  paginate: (number) => void;
  portfolioSize: number;
  setPortfolioSize: (number) => void;
};

type JobContextProviderProps = {
  children: ReactNode;
};

export const JobContext = createContext({} as JobContextData);

export function JobContextProvider({ children }: JobContextProviderProps) {
  const [page, setPage] = useState(0);
  const [portfolioSize, setPortfolioSize] = useState(0);

  function paginate(newDirection: number) {
    if (newDirection > 0) {
      if (page < portfolioSize) {
        setPage(page + newDirection);
      }
    } else if (newDirection < 0) {
      if (page != 0) {
        setPage(page + newDirection);
      }
    }
  }

  return (
    <JobContext.Provider
      value={{ page, paginate, portfolioSize, setPortfolioSize }}
    >
      {children}
    </JobContext.Provider>
  );
}
