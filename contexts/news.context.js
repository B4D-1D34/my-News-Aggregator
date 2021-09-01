import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

export function NewsProvider(props) {
  console.log(`context props`, props);
  const [news, newsSet] = useState();
  const [query, setQuery] = useState("");
  let options;
  if (query) {
    options = {
      method: "GET",
      url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
      params: {
        q: query,
        pageNumber: "1",
        pageSize: "10",
        autoCorrect: "true",
        fromPublishedDate: "null",
        toPublishedDate: "null",
      },
      headers: {
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        "x-rapidapi-key": "4bb33fe4a3msh9a44028b9da3739p19c6b6jsnaaf9f21dbad5",
      },
    };
  } else {
    options = {
      method: "GET",
      url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI",
      params: {
        pageNumber: "1",
        pageSize: "10",
        withThumbnails: "false",
        location: "us",
      },
      headers: {
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        "x-rapidapi-key": "4bb33fe4a3msh9a44028b9da3739p19c6b6jsnaaf9f21dbad5",
      },
    };
  }

  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .request(options)
        .then((response) => response.data);
      newsSet(data);
      console.log("fetched!");
    }
    fetchData();
  }, [query]);

  return (
    <NewsContext.Provider value={{ news, query, setQuery }}>
      {props.children}
    </NewsContext.Provider>
  );
}
