import { createContext, useState, useContext, useEffect } from "react";
import { NewsContext } from "./currentNews.context";
import { QueryContext } from "./query.context";

export const FetchingContext = createContext();

export const FetchingProvider = (props) => {
  const [isFetched, setIsFetched] = useState(true);
  const relatedSearch = useContext(NewsContext);
  const query = useContext(QueryContext);

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
