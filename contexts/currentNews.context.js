import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { specificOptions, trendingOptions } from "./apiRequests";

export const NewsContext = createContext();

export function NewsProvider(props) {
  const [relatedSearch, setRelatedSearch] = useState();
  const [query, setQuery] = useState("");
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
      console.log("fetched!");
    }
    fetchData();
  }, [query]);

  return (
    <NewsContext.Provider value={{ relatedSearch, query, setQuery }}>
      {props.children}
    </NewsContext.Provider>
  );
}
