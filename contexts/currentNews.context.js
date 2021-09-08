import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { specificOptions, trendingOptions } from "./apiRequests";
import { QueryContext } from "./query.context";
import { useRouter } from "next/dist/client/router";

export const NewsContext = createContext();

export function NewsProvider(props) {
  const { push, pathname } = useRouter();

  const query = useContext(QueryContext);
  const [relatedSearch, setRelatedSearch] = useState();
  let options;
  if (query) {
    options = specificOptions(query, "10");
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
      if (pathname !== "/") {
        push("/");
      }
    }
    fetchData();
  }, [query]);

  return (
    <NewsContext.Provider value={relatedSearch}>
      {props.children}
    </NewsContext.Provider>
  );
}
