import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { specificOptions, trendingOptions } from "./apiRequests";
import { QueryContext } from "./query.context";

export const NewsContext = createContext();

export function NewsProvider(props) {
  const query = useContext(QueryContext);
  const [relatedSearch, setRelatedSearch] = useState();
  let options;
  if (query) {
    options = specificOptions(query);
  } else {
    options = trendingOptions;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .request(options)
        .then((response) => response.data);
      setRelatedSearch(data.value);
      // console.log(data);
      // console.log("fetched!");
    }
    fetchData();
  }, [query]);

  return (
    <NewsContext.Provider value={relatedSearch}>
      {props.children}
    </NewsContext.Provider>
  );
}
