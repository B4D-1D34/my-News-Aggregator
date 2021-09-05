import { createContext, useState, useContext } from "react";

const MainQueryContext = createContext();

export const MainQueryProvider = (props) => {
  const [query, setQuery] = useState("");

  return (
    <MainQueryContext.Provider value={{ query, setQuery }}>
      {props.children}
    </MainQueryContext.Provider>
  );
};
export const QueryContext = createContext();

export const QueryProvider = (props) => {
  const { query } = useContext(MainQueryContext);
  return (
    <QueryContext.Provider value={query}>
      {props.children}
    </QueryContext.Provider>
  );
};

export const SetQueryContext = createContext();

export const SetQueryProvider = (props) => {
  const { setQuery } = useContext(MainQueryContext);
  return (
    <SetQueryContext.Provider value={setQuery}>
      {props.children}
    </SetQueryContext.Provider>
  );
};
