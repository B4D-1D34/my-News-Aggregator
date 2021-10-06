import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { specificOptions, trendingOptions } from "./apiRequests";
import { QueryContext } from "./query.context";
import { useRouter } from "next/dist/client/router";
import { PageNumberContext } from "./pageNumber.context";

export const NewsContext = createContext();

export function NewsProvider(props) {
  const { push, pathname } = useRouter();

  const query = useContext(QueryContext);
  const pageNumber = useContext(PageNumberContext);
  const [relatedSearch, setRelatedSearch] = useState();
  let options;
  if (query) {
    options = specificOptions(query, "20", pageNumber);
  } else {
    options = trendingOptions(pageNumber);
  }

  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .request(options)
        .then((response) => response.data);
      setRelatedSearch(data.value);
      console.log(process.env.SHELL);
      // console.log(data);
      // console.log("fetched!");
      if (pathname !== "/") {
        push("/");
      }
    }
    fetchData();
  }, [query]);

  useEffect(() => {
    if (relatedSearch && pageNumber !== "1") {
      async function fetchData() {
        const data = await axios
          .request(options)
          .then((response) => response.data);
        setRelatedSearch([...relatedSearch, ...data.value]);
        if (pathname !== "/") {
          push("/");
        }
      }
      fetchData();
    }
  }, [pageNumber]);

  return (
    <NewsContext.Provider value={relatedSearch}>
      {props.children}
    </NewsContext.Provider>
  );
}
