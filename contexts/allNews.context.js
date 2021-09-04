import { createContext, useState, useContext, useEffect } from "react";
import { NewsContext } from "./currentNews.context";

export const AllNewsContext = createContext();

export const AllNewsProvider = (props) => {
  const [news, setNews] = useState([]);

  const { relatedSearch } = useContext(NewsContext);

  useEffect(() => {
    if (relatedSearch) {
      setNews([...news, ...relatedSearch]);
    }
  }, [relatedSearch]);

  return (
    <AllNewsContext.Provider value={news}>
      {props.children}
    </AllNewsContext.Provider>
  );
};
