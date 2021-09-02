import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { specificOptions, trendingOptions } from "./apiRequests";

export const NewsContext = createContext();

export function NewsProvider(props) {
  const [news, newsSet] = useState();
  const [query, setQuery] = useState("");
  const [isFetched, setIsFetched] = useState(false);
  let options;
  if (query) {
    options = specificOptions(query);
  } else {
    options = trendingOptions;
  }

  useEffect(() => {
    async function fetchData() {
      setIsFetched(false);
      const data = await axios
        .request(options)
        .then((response) => response.data);
      newsSet(data);
      setIsFetched(true);
      console.log("fetched!");
    }
    fetchData();
  }, [query]);

  return (
    <NewsContext.Provider value={{ isFetched, news, query, setQuery }}>
      {props.children}
    </NewsContext.Provider>
  );
}
