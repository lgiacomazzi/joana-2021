import { createContext, ReactNode, useState } from "react";

type JobContextData = {
  page: number;
  direction: number;
};

type JobContextProviderProps = {
  children: ReactNode;
};

export const JobContext = createContext({} as JobContextData);

export async function getStaticProps(context) {
  const response = await require("../public/joana.json");
  const id = context.params.id;
  console.log(response);
  const data = response.jobs.filter((job) => job.id == id)[0];

  return {
    props: data,
  };
}

export function JobContextProvider({ children }: JobContextProviderProps) {
  const [[page, direction], setNewDirection] = useState([0, 0]);
  const [job, setNewJob] = useState(false);

  return (
    <JobContext.Provider value={{ page, direction }}>
      {children}
    </JobContext.Provider>
  );
}
