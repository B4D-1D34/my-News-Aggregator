import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { specificOptions } from "./apiRequests";
import { PrequeryContext } from "./preQuery.context";

export const PredictiveNewsContext = createContext();

export function PredictiveNewsProvider(props) {
  const prequery = useContext(PrequeryContext);
  const [predictiveNews, setPredictiveNews] = useState();
  let options;
  if (prequery) {
    options = specificOptions(prequery, "3");
  }

  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .request(options)
        .then((response) => response.data);
      setPredictiveNews(data.value);
      // console.log(data);
      // console.log("fetched!");
    }
    if (options) {
      fetchData();
    }
  }, [prequery]);

  return (
    <PredictiveNewsContext.Provider value={predictiveNews}>
      {props.children}
    </PredictiveNewsContext.Provider>
  );
}
