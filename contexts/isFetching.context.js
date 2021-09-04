import { createContext, useState, useContext, useEffect } from "react";
import { NewsContext } from "./currentNews.context";

export const FetchingContext = createContext();

export const FetchingProvider = (props) => {
  const [isFetched, setIsFetched] = useState(false);
  const { relatedSearch, query } = useContext(NewsContext);

  useEffect(() => {
    setIsFetched(false);
  }, [query]);

  useEffect(() => {
    setIsFetched(true);
  }, [relatedSearch]);

  return (
    <FetchingContext.Provider value={isFetched}>
      {props.children}
    </FetchingContext.Provider>
  );
};
