import React, { createContext, useState, useEffect } from "react";

export const NewsContext = createContext();

export function NewsProvider(props) {
  const [news, newsSet] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=10&withThumbnails=false&location=us",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "contextualwebsearch-websearch-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "4bb33fe4a3msh9a44028b9da3739p19c6b6jsnaaf9f21dbad5",
          },
        }
      ).then((response) => response.json());
      newsSet(data);
      console.log("fetched!");
    }
    fetchData();
  }, []);

  return (
    <NewsContext.Provider value={news}>{props.children}</NewsContext.Provider>
  );
}
