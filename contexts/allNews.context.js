import { createContext, useState, useContext, useEffect } from "react";
import { NewsContext } from "./currentNews.context";

export const AllNewsContext = createContext();

export const AllNewsProvider = (props) => {
  const [news, setNews] = useState([]);

  const { relatedSearch } = useContext(NewsContext);

  useEffect(() => {
    if (relatedSearch) {
      setNews([...news, ...relatedSearch.value]);
    }
  }, [relatedSearch]);

  return (
    <AllNewsContext.Provider value={{ news, setNews }}>
      {props.children}
    </AllNewsContext.Provider>
  );
};
